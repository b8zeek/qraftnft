import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

import store from '../../state/state'
import { useWallet } from '../../services/useWallet'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import AnimatedSection from '../../components/AnimatedSection'
import Button from '../../components/Button'

import phantom from '../../assets/phantom.svg'

const QRPage = () => {
    const phantomWallet = store(state => state.phantomWallet)
    const { connectPhantomWallet } = useWallet()

    return <AnimatedPage>
        <Heading>QR NFT</Heading>
        <Text>Show the people who are you!</Text>
        <Content>
            <LeftSide>
                <AnimatedSection delay={.3}>
                    <Heading type='small'>Phantom Wallet</Heading>
                    <Text size='medium'>In order to use the application, you're gonna have to connect your Phantom wallet. We need your public address so we can generate your UNIQUE robot and we need access to your wallet so you can select your favorite NFT you want to QR.</Text>
                </AnimatedSection>
                <PhantomContainer
                    initial={{ x: '-300%' }}
                    animate={{ x: 0, transition: { duration: 3 } }}
                >
                    <Phantom src={phantom} alt='phantom-logo' />
                </PhantomContainer>
            </LeftSide>
            <RightSide>
                <PhantomInfo>
                    {phantomWallet ?
                        <>
                            <Heading type='small' marginBottom='10px'>Phantom Wallet Info</Heading>
                            <Text size='medium' bold>Public Address:</Text>
                            <Text size='medium' marginBottom='40px'>{phantomWallet ? phantomWallet.publicKey.toString() : 'Not connected'}</Text>

                            <Heading type='small' marginBottom='10px'>Generate QR Wallet Image</Heading>
                            <Text size='medium' marginBottom='40px'>Generate a unique robot image from Phantom wallet's public key. Add the link you want to share with people and we'll send you the image.</Text>

                            <Heading type='small' marginBottom='10px'>QR Your NFT</Heading>
                            <Text size='medium'>Select one of the NFTs from your wallet and apply a QR code to it. We suggest adding your Linktree url to it.</Text>
                        </> :
                        <Button onClick={connectPhantomWallet.bind(null, false)}>Connect Phantom Wallet</Button>
                    }
                </PhantomInfo>
            </RightSide>
        </Content>
    </AnimatedPage>
}

const Content = styled.div`
    width: 100%;
    height: calc(100% - 104px);
`

const LeftSide = styled.div`
    width: calc(50% - 30px);
    display: inline-block;
    vertical-align: top;
    padding: 50px 30px 0 0;
`

const PhantomContainer = styled(motion.div)`
    width: 100%;
    padding-top: 70px;
`
const svgShadow = keyframes`
    from {
      filter: drop-shadow( 0 0 5px #fea1df) drop-shadow( 0 0 10px #fea1df) drop-shadow( 0 0 15px #fea1df);
    }
  
    to {
      
      filter: drop-shadow( 0 0 15px #4e44ce) drop-shadow( 0 0 20px #4e44ce) drop-shadow( 0 0 25px #4e44ce);
    }
`

const Phantom = styled.img`
    width: 40%;
    animation: ${svgShadow} 2s ease-in-out infinite alternate;
    margin-left: 10%;
`

const RightSide = styled.div`
    width: 50%;
    height: calc(100% - 100px);
    display: inline-block;
    vertical-align: top;
    padding: 50px 0;
`

const PhantomInfo = styled.div`
    width: calc(100% - 40px);
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
    background: #4e44ce45;
    overflow: hidden;
    text-align: center;
`

export default QRPage