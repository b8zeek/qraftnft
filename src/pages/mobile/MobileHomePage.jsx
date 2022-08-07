import styled from 'styled-components'

import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from '../../components/Button'
import bg from '../../assets/index_scale_adoption_mobile.webp'

const MobileHomePage = () => {
    return <Container>
        <Main>
            <Heading
                type='small'
                marginBottom='20px'
            >
                Welcome Solana Hacker House Krakow
            </Heading>
            <Text
                size='medium'
                marginBottom='15px'
            >
                In order to use the application, you're gonna have to connect your Phantom wallet.
            </Text>
            <Button>Connect</Button>
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

const BGImage = styled.img`
    width: 70vw;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.3;
    z-index: 2;
`

export default MobileHomePage