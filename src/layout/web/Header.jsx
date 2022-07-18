import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Header = () =>
    <StyledHeader>
        <Navigation>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='example'>Example</StyledLink>
            <StyledLink to='qr' cta={+true}>QR NFT</StyledLink>
            <StyledLink to='about'>About</StyledLink>
        </Navigation>
    </StyledHeader>

const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    text-align: right;
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

export default Header
