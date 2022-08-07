import styled from 'styled-components'
import { motion } from 'framer-motion'

import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from '../../components/Button'

import store from '../../state/state'
import { useWallet } from '../../services/useWallet'

const NFTItem = ({ NFTData }) =>
    <NFTItemContainer>
        <NFT src={NFTData.image_uri} />
        <Heading type='smallest'>{NFTData.name}</Heading>
    </NFTItemContainer>


const QRaftNFTPage = () => {
    const phantomWallet = store(state => state.phantomWallet)
    const NFTs = store(state => state.NFTs)
    const { getNftTokenData } = useWallet()

    return <Container>
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
                {NFTs?.map(NFTData => <NFTItem NFTData={NFTData} key={NFTData.mint} />)}
            </Gallery> :
            <Button size='small' onClick={getNftTokenData}>Get NFTs</Button>
        }
    </Container>
}

const Container = styled.div`
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

export default QRaftNFTPage
