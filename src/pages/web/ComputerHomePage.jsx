import styled from 'styled-components'
import bg from '../../assets/index_scale_adoption.webp'
import circle from '../../assets/circle.png'
import solana from '../../assets/s-logo.webp'

import Heading from '../../components/Heading'

const ComputerHomePage = () => {
    return <Container>
        <Content>
            <Heading>Welcome</Heading>
        </Content>
        <SolanaLogo src={solana} />
        <BGImage src={bg} />
        <MovingCircle src={circle} alt='background-circle' />
    </Container>
}

const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: black;
    color: white;
`

const Content = styled.div`
    width: 70%;
    padding: 50px 15%;
    position: relative;
    z-index: 3;
`

const BGImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 60%;
    opacity: .3;
`
const SolanaLogo = styled.img`
    width: 200px;
    position: absolute;
    bottom: 0%;
    left: 15%;
    z-index: 2;
    opacity: .5;
`

const MovingCircle = styled.img`
    height: 700px;
    width: 700px;
    position: absolute;
    left: -100px;
    bottom: -100px;
    z-index: 1;
    animation: pulse 5s linear   alternate infinite;
`

export default ComputerHomePage