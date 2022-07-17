import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from '../../components/Button'

import degen from '../../assets/degen-ape.png'
import qr from '../../assets/qr-code.png'

const ExamplePage = () => {
    const [page, setPage] = useState(0)

    return <AnimatedPage>
        <Heading>DegenerAPE Yourself</Heading>
        <Text>Link all your social media with your favorite NFT</Text>
        <Content>
            <LeftSide>
                {page >= 1 && <Section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Heading type='small'>Connect Phantom Wallet</Heading>
                    <Text size='medium' marginBottom='30px'>Connect your Phantom Wallet with the application and choose the NFT you are the most proud of.</Text>
                </Section>}

                {page >= 3 && <Section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Heading type='small'>Enter the Link</Heading>
                    <Text size='medium' marginBottom='30px'>Enter the link of the page you want to connect to your NFT. It can be LinkTree, LinkedIn, YouTube, web page, etc.</Text>
                </Section>}

                {page >= 5 && <Section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Heading type='small'>Get Sticker</Heading>
                    <Text size='medium' marginBottom='30px'>Enter your address and we'll send you your generated sticker.</Text>
                </Section>}

                {page !== 5 && <Button onClick={() => setPage(page => ++page)}>
                    {page === 0 && 'Start'}
                    {page === 1 && 'Select NFT'}
                    {page === 2 && 'Link Social'}
                    {page === 3 && 'Generate QR Code'}
                    {page === 4 && 'Create Sticker'}
                </Button>}
            </LeftSide>
            <RightSide>
                {page >= 2 && <ImageContainer
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: .3 }}
                >
                    <MainImage src={degen} />
                </ImageContainer>}
                {page >= 4 && <ImageContainer
                    offset={30}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: .3 }}
                    whileHover={{ scale: 1.01, x: '2%' }}
                >
                    <QRImage src={qr} />
                </ImageContainer>}
            </RightSide>
        </Content>
    </AnimatedPage>
}

const Content = styled.div`
    width: 100%;
`

const LeftSide = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top;
    padding-top: 80px;
`

const RightSide = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top;
    position: relative;
`

const Section = styled(motion.div)`
    width: 100%;
`

const ImageContainer = styled(motion.div)`
    width: 400px;
    position: absolute;
    top: 70px;
    left: 80px;
    transform: perspective(500px) rotateY(20deg);
`

const MainImage = styled.img`
    width: 100%;
    transform: perspective(500px) rotateY(20deg);
    border-radius: 5px;
    box-shadow: 0px 0px 30px #aaa;
`

const QRImage = styled.img`
    width: 100%;
    position: relative;
    left: 20px;
    transform: perspective(500px) rotateY(20deg);
    // backdrop-filter: blur(15px) saturate(3);
    filter: drop-shadow(-10px 10px 10px rgba(200, 200, 200, .4));
`

export default ExamplePage