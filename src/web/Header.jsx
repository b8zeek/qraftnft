import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

import store from '@state/state'
import { useWallet } from '@services/useWallet'

import phantom from '@assets/phantom.svg'

const Header = () => {
    const phantomWallet = store(state => state.phantomWallet)
    const { connectPhantomWallet } = useWallet()

    return (
        <Container>
            <Content>
                <Navigation>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='example'>Example</StyledLink>
                    <StyledLink to='qr' cta={+true}>
                        QR NFT
                    </StyledLink>
                    <StyledLink to='about'>About</StyledLink>
                    <PhantomLogo
                        src={phantom}
                        alt='phantom-logo'
                        onClick={connectPhantomWallet}
                        phatnomConnected={phantomWallet}
                    />
                </Navigation>
            </Content>
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.9);
    text-align: right;
`

const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 80px;
    margin: 0 auto;
`

const greenGlow = keyframes`
    from { filter: drop-shadow( 0 0 1px green) drop-shadow( 0 0 2px green) drop-shadow( 0 0 3px green); }
    to { filter: drop-shadow( 0 0 2px green) drop-shadow( 0 0 3px green) drop-shadow( 0 0 5px green); }
`

const redGlow = keyframes`
    from { filter: drop-shadow( 0 0 1px red) drop-shadow( 0 0 2px red) drop-shadow( 0 0 3px red); }
    to { filter: drop-shadow( 0 0 2px red) drop-shadow( 0 0 3px red) drop-shadow( 0 0 5px red); }
`

const PhantomLogo = styled.img`
    width: 30px;
    position: relative;
    top: 5px;
    transform: rotateY(180deg);
    cursor: pointer;
    animation: ${props => (props.phatnomConnected ? greenGlow : redGlow)} 2s
        ease-in-out infinite alternate;
`

const Navigation = styled.nav`
    padding: 20px 0;
`

const StyledLink = styled(Link)`
    display: inline-block;
    line-height: 40px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 800;
    color: white;
    background-color: ${({ cta, theme }) => (cta ? theme.color.pink : 'black')};
    text-decoration: none;
    border-radius: 10px;
    margin-right: 20px;

    &:hover {
        color: ${({ cta, theme }) =>
            cta ? theme.color.white : theme.color.lightPink};
        background-color: ${({ cta, theme }) =>
            cta ? theme.color.lightPink : 'black'};
    }
`

export default Header
