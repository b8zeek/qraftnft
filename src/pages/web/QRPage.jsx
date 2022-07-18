import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import store from '../../state/state'
import { useWallet } from '../../services/useWallet'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import AnimatedSection from '../../components/AnimatedSection'
import Button from '../../components/Button'
import RobohashComponent from '../../components/Robohash'
import Input from '../../components/Input'
import QRCode from '../../components/QRCode'

import phantom from '../../assets/phantom.svg'

const QRPage = () => {
    const phantomWallet = store(state => state.phantomWallet)
    const robotGenerated = store(state => state.robotGenerated)
    const setRobotGenerated = store(state => state.setRobotGenerated)
    const { connectPhantomWallet } = useWallet()
    const [qr, setQR] = useState(false)
    const [qrLink, setQRLink] = useState('')
    const [robohashURL, setRobohashURL] = useState('')
    const [showQR, setShowQR] = useState(false)

    const generateQRNFT = () => {
        const url = document.getElementById('robohash-container').getElementsByTagName('img')[0].src

        const imageLink = url.split('?')[0]
    
        var request = new XMLHttpRequest()
        request.open('GET', imageLink, true)
        request.responseType = 'blob'
        request.onload = function() {
            var reader = new FileReader()
            reader.readAsDataURL(request.response)
            reader.onload = e => {
                console.log(e.target.result)
                setRobohashURL(e.target.result)
                setShowQR(true)
            }
        }
        request.send()

        // const templateParams = {
        //     currentValue: qrLink,
        //     walletAddress: phantomWallet.publicKey.toString(),
        //     deliveryAddress: 'bejzik8@gmail.com'
        // }
        console.log('EXE DONE')

        // emailjs.send('service_w6acx2m', 'template_0gczmq7', templateParams, 'FsM-UuY5XXpVXOUdZ')
        //     .then(result => {
        //         console.log(result.text)
        //     }, error => {
        //         console.log(error.text)
        //     })
    }

    return <AnimatedPage>
        <AnimatePresence>
        {!qr && <LeftSide
            key='left'
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <AnimatedSection delay={.3}>
                <Heading type='small'>Phantom Wallet</Heading>
                <Text size='medium'>In order to use the application, you're gonna have to connect your Phantom wallet. We need your public address so we can generate your UNIQUE robot and we need access to your wallet so you can select your favorite NFT you want to QR.</Text>
            </AnimatedSection>
            <PhantomContainer
                initial={{ x: '-300%' }}
                animate={{ x: 0, transition: { duration: 3 } }}
            >
                <Phantom src={phantom} alt='phantom-logo' />
            </PhantomContainer>
        </LeftSide>}
        <RightSide
            key='right'
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
        >
            {phantomWallet ?
                <>
                    <Section
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                    >
                        <Heading type='small' marginBottom='10px'>Phantom Wallet Info</Heading>
                        <Text size='medium' bold>Public Address:</Text>
                        <Text size='medium'>{phantomWallet ? phantomWallet.publicKey.toString() : 'Not connected'}</Text>
                    </Section>

                    <Section
                        cursorPointer
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setQR(true)}
                    >
                        <Heading type='small' marginBottom='10px'>Generate QR Wallet Image</Heading>
                        <Text size='medium'>Generate a unique robot image from Phantom wallet's public key. Add the link you want to share with people and we'll send you the image.</Text>
                    </Section>

                    <Section
                        cursorPointer
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setQR(true)}
                    >
                        <Heading type='small' marginBottom='10px'>QR Your NFT</Heading>
                        <Text size='medium'>Select one of the NFTs from your wallet and apply a QR code to it. We suggest adding your Linktree url to it.</Text>
                    </Section>
                </> :
                <Button onClick={connectPhantomWallet.bind(null, false)}>Connect Phantom</Button>
            }
        </RightSide>
        {qr && <NewSide
            key='new'
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
        >
            {!robotGenerated && <Button onClick={setRobotGenerated.bind(null, true)}>Generate Robot</Button>}
            {robotGenerated && <>
                <RobohashComponent walletAddress={phantomWallet.publicKey.toString()} />
                <Input label='Enter QR code link' onChange={e => setQRLink(e.target.value)} />
                {!showQR && qrLink.trim() && <Button onClick={generateQRNFT}>Generate QR</Button>}
                {showQR &&
                    <QRCodeContainer>
                        <QRCode text={qrLink.trim()} robohashURL={robohashURL} />
                    </QRCodeContainer>
                }
            </>}
        </NewSide>}
        
        </AnimatePresence>
    </AnimatedPage>
}

const LeftSide = styled(motion.div)`
    width: calc(50% - 40px);
    display: inline-block;
    vertical-align: top;
    padding-right: 40px;
`

const PhantomContainer = styled(motion.div)`
    width: 100%;
    padding-top: 70px;
`
const svgShadow = keyframes`
    from {
        filter: drop-shadow( 0 0 5px #fea1df) drop-shadow( 0 0 10px #fea1df) drop-shadow( 0 0 15px #fea1df);
    }
  
    to {
      
        filter: drop-shadow( 0 0 15px #4e44ce) drop-shadow( 0 0 20px #4e44ce) drop-shadow( 0 0 25px #4e44ce);
    }
`

const Phantom = styled.img`
    width: 40%;
    animation: ${svgShadow} 2s ease-in-out infinite alternate;
    margin-left: 10%;
`

const RightSide = styled(motion.div)`
    width: 50%;
    display: inline-block;
    vertical-align: top;
    padding-bottom: 50px;
    text-align: center;
`

const NewSide = styled(motion.div)`
    width: calc(50% - 40px);
    min-height: 100vh;
    padding-left: 40px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
`

const Section = styled(motion.div)`
    width: 70%;
    padding: 30px 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
    background: #4e44ce27;
    text-align: center;
    margin-bottom: 30px;

    ${({ cursorPointer }) => cursorPointer && 'cursor: pointer;'}
`

const QRCodeContainer = styled.div`
    width: 100%;
    height: 300px;
    & div {
        margin: 0 auto;
    }
`

export default QRPage