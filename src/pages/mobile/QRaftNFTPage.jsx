import styled from 'styled-components'
import { motion } from 'framer-motion'

import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Input from '../../components/Input'
import QRCode from '../../components/QRCode'

import store from '../../state/state'
import { useWallet } from '../../services/useWallet'
import { useState } from 'react'

const NFTItem = ({ NFTData }) => {
    const setNFTSelected = store(state => state.setNFTSelected)

    return <NFTItemContainer onClick={() => setNFTSelected(NFTData)}>
        <NFT src={NFTData.image_uri} />
        <Heading type='smallest'>{NFTData.name}</Heading>
    </NFTItemContainer>
}

const GalleryPage = () => {
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
                {NFTs?.map(NFTData =>
                    <NFTItem
                        key={NFTData.mint}
                        NFTData={NFTData}
                    />
                )}
            </Gallery> :
            <Button size='small' onClick={getNftTokenData}>Get NFTs</Button>
        }
    </Container>
}

const SingleNFT = () => {
    const NFTSelected = store(state => state.NFTSelected)
    const [QRLink, setQRLink] = useState('')
    const [robohashURL, setRobohashURL] = useState('')
    const [QRGenerated, setQRGenerated] = useState(false)

    const generateQRNFT = nft => {
        let imageLink = nft.image_uri
    
        var request = new XMLHttpRequest()

        request.open('GET', imageLink, true)
        request.responseType = 'blob'
        request.onload = function() {
            var reader = new FileReader()
            reader.readAsDataURL(request.response)
            reader.onload = e => {
                console.log(e.target.result)
                setRobohashURL(e.target.result)
                setQRGenerated(true)
            }
        }

        request.send()
    }

    return <Container>
        <Heading
            type='small'
            marginBottom='15px'
        >
            QR your NFT!
        </Heading>
        {robohashURL ?
            <>
                <QRCodeContainer>
                    <QRCode text={QRLink.trim()} robohashURL={robohashURL} />
                </QRCodeContainer>
                <Button size='small' onClick={generateQRNFT.bind(null, NFTSelected)}>Mint NFT</Button>    
            </> :
            <>
                <Text
                    size='small'
                    marginBottom='20px'
                >
                    Enter the link you want to apply to the selected NFT and click Generate button.
                </Text>
                <NFTItem NFTData={NFTSelected} />
                <Input
                    label='Enter QR code link'
                    fullWidth={true}
                    marginBottom='20px'
                    onChange={event => setQRLink(event.target.value)}
                />
                <Button size='small' onClick={generateQRNFT.bind(null, NFTSelected)}>Generate QRNFT</Button>
            </>
        }
    </Container>
}

const QRaftNFTPage = () => {
    const NFTSelected = store(state => state.NFTSelected)

    return NFTSelected ?
        <SingleNFT /> :
        <GalleryPage />
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

const QRCodeContainer = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;

    & div { margin: 0 auto; }
`

export default QRaftNFTPage
