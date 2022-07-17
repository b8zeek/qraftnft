import styled, { keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation, Link } from 'react-router-dom'

import bg from '../../assets/index_scale_adoption.webp'
import circle from '../../assets/circle.png'
import solana from '../../assets/s-logo.webp'
import ape from '../../assets/ape-white.svg'

import LandingPage from './LandingPage'
import ExamplePage from './ExamplePage'
import AboutPage from './AboutPage'


const Header = () =>
    <StyledHeader>
        {/* <Ape src={ape} /> */}
        <Navigation>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='example'>Example</StyledLink>
            <StyledLink to='qr' cta={true}>QR NFT</StyledLink>
            <StyledLink to='about'>About</StyledLink>
        </Navigation>
    </StyledHeader>

const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    text-align: right;
`

const Ape = styled.img`
    position: absolute;
    top: -20px;
    left: 230px;
    height: 80px;
    margin-right: 20px;
`

const Logo = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: white;
`

const Navigation = styled.nav`
    padding: 20px 10%;
`

const StyledLink = styled(Link)`
    display: inline-block;
    line-height: 40px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 800;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    margin-right: 5px;

    ${props => props.cta && `background-color: ${props.theme.color.darkPink};`}

    &:hover {
        color: ${props => props.cta ? props.theme.color.white : props.theme.color.green};
        ${props => props.cta && `background-color: ${props.theme.color.pink};`}
    }
`

const ComputerHomePage = () => {
    const location = useLocation()

    return <Container>
        <Main>
            <Header />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='example' element={<ExamplePage />} />
                    <Route path='about' element={<AboutPage />} />
                </Routes>
            </AnimatePresence>
        </Main>
        <SolanaLogo src={solana} />
        <BGImage src={bg} />
        <MovingCircle src={circle} alt='background-circle' />
    </Container>
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: black;
`

const Main = styled.div`
    position: relative;
    width: 100%;
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