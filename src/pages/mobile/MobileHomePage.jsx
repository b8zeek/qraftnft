import styled from 'styled-components'
import { motion } from 'framer-motion'

import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from '../../components/Button'
import bg from '../../assets/index_scale_adoption_mobile.webp'

import store from '../../state/state'
import { useWallet } from '../../services/useWallet'

const Landing = () => {
    const { connectPhantomWallet } = useWallet()

    return <PageContainer>
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
        <Button
            size='small'
            onClick={connectPhantomWallet.bind(null, false)}
        >
            Connect Phantom
        </Button>
    </PageContainer>
}

const NFTItem = ({ NFTData }) =>
    <NFTItemContainer>
        <NFT
            key={NFTData.mint}
            src={NFTData.image_uri}
        />
        <Heading type='smallest'>{NFTData.name}</Heading>
    </NFTItemContainer>

const PhantomConnectedSection = () =>{
    const phantomWallet = store(state => state.phantomWallet)
    const NFTs = store(state => state.NFTs)
    const { getNftTokenData } = useWallet()

    return <PageContainer>
        <Heading
            type='small'
            marginBottom='15px'
        >
            QRaftNFT
        </Heading>
        <Section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
        >
            <Heading type='smallest'>Phantom Wallet Info</Heading>
            <Text size='small'>Public Address:</Text>
            <Text size='small'>{phantomWallet.publicKey.toString()}</Text>
        </Section>
        <Section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
        >
            <Heading type='smallest'>QR Your NFT</Heading>
            <Text size='small'>Select one of the NFTs from your wallet and apply a QR code to it. We suggest adding your Linktree url to it.</Text>
        </Section>
        {NFTs.length !== 0 ?
            <Gallery>
                <Heading type='smallest'>Your NFT Gallery</Heading>
                <Text
                    size='small'
                    marginBottom='20px'
                >
                    Select on one of your NFTs by clicking on it in order to apply a QR code.
                </Text>
                {NFTs?.map(NFTData => <NFTItem NFTData={NFTData} />)}
            </Gallery> :
            <Button size='small' onClick={getNftTokenData}>Get NFTs</Button>
        }
    </PageContainer>
}

const MobileHomePage = () => {
    const phantomWallet = store(state => state.phantomWallet)

    return <Container>
        <Main>
            {phantomWallet ?
                <PhantomConnectedSection /> :
                <Landing />
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

const PageContainer = styled.div`
    width: 100%;
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
    margin-bottom: 15px;
`

const Gallery = styled.div`
    width: 100%;
    margin-top: 30px;
`

const NFTItemContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;
`

const NFT = styled.img`
    width: 100%;
    display: block;
    cursor: pointer;
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