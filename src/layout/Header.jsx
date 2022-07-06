import styled from 'styled-components'

const Header = () =>
    <StyledHeader>
        <Logo><span className='qr'>QRaft</span><span className='nft'>NFT</span></Logo>
    </StyledHeader>

const StyledHeader = styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 80px;
    background: rgba(255, 255, 255, 0.23);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
`

const Logo = styled.p`
    line-height: 80px;
    font-size: 46px;
    font-family: Inter;
    font-weight: 900;
    letter-spacing: -4.6px;
    padding-left: 50px;
    margin: 0;

    & span.qr {
        background: -webkit-linear-gradient(
            75deg,
            hsl(100deg 100% 20%) 0%,
            hsl(147deg 97% 26%) 10%,
            hsl(161deg 100% 31%) 20%,
            hsl(172deg 100% 36%) 30%,
            hsl(180deg 100% 41%) 40%,
            hsl(185deg 100% 50%) 50%,
            hsl(178deg 100% 47%) 60%,
            hsl(168deg 100% 47%) 70%,
            hsl(141deg 83% 65%) 80%,
            hsl(95deg 78% 64%) 90%,
            hsl(66deg 81% 49%) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & span.nft {
        background: -webkit-linear-gradient(
            75deg,
            hsl(240deg 100% 20%) 0%,
            hsl(289deg 100% 21%) 11%,
            hsl(315deg 100% 27%) 22%,
            hsl(329deg 100% 36%) 33%,
            hsl(337deg 100% 43%) 44%,
            hsl(357deg 91% 59%) 56%,
            hsl(17deg 100% 59%) 67%,
            hsl(34deg 100% 53%) 78%,
            hsl(45deg 100% 50%) 89%,
            hsl(55deg 100% 50%) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
        padding-left: 20px;
    }
`

export default Header