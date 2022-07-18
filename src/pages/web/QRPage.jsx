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

import phantom from '../../assets/phantom.svg'

const QRPage = () => {
    const phantomWallet = store(state => state.phantomWallet)
    const { connectPhantomWallet } = useWallet()
    const [qr, setQR] = useState(false)

    return <AnimatedPage>
        <AnimatePresence>
        {!qr && <LeftSide
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
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
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
        >
            <Button>Generate Robot</Button>
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

export default QRPage