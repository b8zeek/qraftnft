import styled from 'styled-components'

import bg from '../../assets/index_scale_adoption_mobile.webp'

import LandingPage from './LandingPage'
import QRaftNFTPage from './QRaftNFTPage'

import store from '../../state/state'

const MobileHomePage = () => {
    const phantomWallet = store(state => state.phantomWallet)

    return <Container>
        <Main>
            {phantomWallet ?
                <QRaftNFTPage /> :
                <LandingPage />
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

const BGImage = styled.img`
    width: 70vw;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.3;
    z-index: 2;
`

export default MobileHomePage