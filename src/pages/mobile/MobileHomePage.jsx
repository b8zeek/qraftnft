import styled from 'styled-components'
import { motion } from 'framer-motion'

import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from '../../components/Button'
import bg from '../../assets/index_scale_adoption_mobile.webp'

import store from '../../state/state'
import { useWallet } from '../../services/useWallet'

const MobileHomePage = () => {
    const phantomWallet = store(state => state.phantomWallet)
    const { connectPhantomWallet } = useWallet()

    return <Container>
        <Main>
            <Heading type='small'>
                Welcome Solana
            </Heading>
            <Heading
                type='small'
                marginBottom='20px'
            >
                HH Krakow
            </Heading>
            <Text
                size='medium'
                marginBottom='15px'
            >
                In order to use the application, you're gonna have to connect your Phantom wallet.
            </Text>
            {phantomWallet ?
                <>
                    <Section>
                        <Heading type='smallest'>Phantom Wallet Info</Heading>
                        <Text size='small'>Public Address:</Text>
                        <Text size='small'>{phantomWallet.publicKey.toString()}</Text>
                    </Section>
                </> :
                <Button onClick={connectPhantomWallet.bind(null, false)}>Connect</Button>
            }
        </Main>
        <BGImage src={bg} />
    </Container>
}

const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: black;
    color: white;
    text-align: right;
`

const Main = styled.div`
    width: 80%;
    padding: 20px 10%;
    position: relative;
    z-index: 3;
    text-align: center;
`

const Section = styled(motion.div)`
    width: 80%;
    padding: 15px 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    background: #4e44ce36;
    text-align: center;
`

const BGImage = styled.img`
    width: 70vw;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.3;
    z-index: 2;
`

export default MobileHomePage