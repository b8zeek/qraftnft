import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import bg from '../../assets/index_scale_adoption.webp'
import circle from '../../assets/circle.png'
import solana from '../../assets/s-logo.webp'
import degen from '../../assets/degen-ape.png'
import qr from '../../assets/qr-code.png'

import Heading from '../../components/Heading'

const AnimatedPage = ({ key, children }) =>
    <Content
        key={key}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: .3 }}
    >
        {children}
    </Content>

const ComputerHomePage = () => {
    const [page, setPage] = useState(0)

    return <Container>
        <button onClick={() => setPage(!page)}>123</button>
        <AnimatePresence>
            {!page && <AnimatedPage key='welcome'>
                <Heading>Welcome to QRNFT</Heading>
                <MainImage src={degen} />
                <QRImage src={qr} />
            </AnimatedPage>}
            {page && <AnimatedPage key='solana'>
                <Heading>Solana</Heading>
            </AnimatedPage>}
        </AnimatePresence>
        <SolanaLogo src={solana} />
        <BGImage src={bg} />
        <MovingCircle src={circle} alt='background-circle' />
    </Container>
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background-color: black;
    color: white;
`

const Content = styled(motion.div)`
    position: absolute;
    width: 70%;
    padding: 50px 15%;
    z-index: 3;
`

const BGImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 60%;
    opacity: .2;
`
const SolanaLogo = styled.img`
    width: 200px;
    position: absolute;
    bottom: 0%;
    left: 15%;
    z-index: 2;
    opacity: .3;
`

const MainImage = styled.img`
    width: 400px;
    position: absolute;
    top: 200px;
    left: 300px;
    transform: perspective(500px) rotateY(20deg);
`

const QRImage = styled.img`
    width: 400px;
    position: absolute;
    top: 200px;
    left: 330px;
    transform: perspective(500px) rotateY(20deg);
    filter: drop-shadow(-5px 10px 10px rgba(255, 255, 255, .3));
`

const pulse = keyframes`
    0% {
        transform : scale(.9) translateX(-40%) translateY(-10%) rotate(180deg);
        opacity   : .4;
    }
    50% {
        transform : scale(1.3) translateX(-40%) translateY(25%) rotate(0);
        opacity   : .6;
    }
    100% {
        transform : scale(.8) translateX(20%) translateY(25%) rotate(180deg);
        opacity   : .3;
    }
`

const MovingCircle = styled.img`
    height: 700px;
    width: 700px;
    position: absolute;
    left: -100px;
    bottom: -100px;
    z-index: 1;
    animation: ${pulse} 5s linear   alternate infinite;
`

export default ComputerHomePage