import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import AnimatedPage from '../components/AnimatedPage'
import AnimatedSection from '@components/AnimatedSection'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Button from '@components/Button'

import degen from '@assets/degen-ape.png'
import qr from '@assets/qr-code.png'

const sections = [
    {
        presentOnStep: 1,
        key: 'connect-phantom',
        heading: 'Connect Phantom Wallet',
        description: 'Connect your Phantom Wallet with the application and choose the NFT you are the most proud of.'
    },
    {
        presentOnStep: 3,
        key: 'enter-link',
        heading: 'Enter the Link',
        description:
            'Enter the link of the page you want to connect to your NFT. It can be LinkTree, LinkedIn, YouTube, web page, etc.'
    },
    {
        presentOnStep: 5,
        key: 'get-sticker',
        heading: 'Get Sticker or NFT',
        description:
            "Enter your address and we'll send you your generated sticker. Another thing you can do, you can mint your newly created image with your QR code, mint it and send it to someone."
    }
]

const buttonStepText = ['Start', 'Select NFT', 'Link Social', 'Generate QR Code', 'Create Sticker']

const ExamplePage = () => {
    const [step, setStep] = useState(0)

    const nextStep = () => setStep(step => ++step)

    return (
        <AnimatedPage heading='DegenerAPE Yourself' description='Link all your social media with your favorite NFT'>
            <LeftSide>
                {sections
                    .filter(({ presentOnStep }) => presentOnStep <= step)
                    .map(({ key, heading, description }) => (
                        <AnimatedSection
                            key={key}
                            initial={{ opacity: 0, scaleY: 0, y: '-50%' }}
                            animate={{ opacity: 1, scaleY: 1, y: 0 }}
                        >
                            <Heading type='small'>{heading}</Heading>
                            <Text size='medium' marginBottom='30px'>
                                {description}
                            </Text>
                        </AnimatedSection>
                    ))}

                {step < 5 && <Button onClick={nextStep}>{buttonStepText[step]}</Button>}
            </LeftSide>
            <RightSide>
                {step >= 2 && (
                    <ImageContainer initial={{ x: '100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                        <ApeImage src={degen} />
                    </ImageContainer>
                )}
                {step >= 4 && (
                    <ImageContainer
                        positionAbsolute
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: '-50%', opacity: 1 }}
                        whileHover={{ scale: 1.01, x: '-48%' }}
                    >
                        <QRImage src={qr} />
                    </ImageContainer>
                )}
            </RightSide>
        </AnimatedPage>
    )
}

const LeftSide = styled.div`
    width: calc(70% - 100px);
    display: inline-block;
    vertical-align: top;
    margin-right: 100px;
`

const RightSide = styled.div`
    width: 30%;
    display: inline-block;
    vertical-align: top;
    position: relative;
`

const ImageContainer = styled(motion.div)`
    width: 100%;
    transform: perspective(500px) rotateY(20deg);
    margin: 0 0 0 auto;

    ${({ positionAbsolute }) =>
        positionAbsolute &&
        `
        position: absolute;
        top: 0;
        left: 50%;
    `}
`

const ApeImage = styled.img`
    width: 100%;
    transform: perspective(500px) rotateY(20deg);
    border-radius: 5px;
    box-shadow: -2px 0 1px #fff, -2px 0 20px #fff, -10px 0 10px #0ba9ca, -10px 0 20px #0ba9ca;
`

const QRImage = styled.img`
    width: 100%;
    position: relative;
    left: 30px;
    transform: perspective(500px) rotateY(20deg);
    filter: drop-shadow(-10px 10px 10px rgba(255, 255, 194, 0.6));
`

export default ExamplePage
