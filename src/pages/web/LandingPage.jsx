import styled from 'styled-components'
import { motion } from 'framer-motion'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'
import Text from '../../components/Text'

import qr from '../../assets/dao-hero-cropped.webp'

const AnimatedSection = ({ children, delay }) =>
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: delay || .3 } }}
    >
        {children}
    </motion.div>

const LandingPage = () =>
    <AnimatedPage>
        <Heading>Welcome</Heading>
        <Text>Greetings Solana Hacker House Paris!</Text>
        <Content>
            <LeftSide>
                <AnimatedSection>
                    <Heading type='small'>Project Idea</Heading>
                    <Text size='medium' marginBottom='30px'>Create a new way of socialising with the people. Generate an image with the NFT in your possession that you are proud of and add a QR code which contains link to your social networks. Show the people who are you and what you like.</Text>
                </AnimatedSection>
                <AnimatedSection delay={.5}>
                    <Heading type='small'>Stickerize the Image</Heading>
                    <Text size='medium' marginBottom='30px'>Who needs a visiting card? Order stickers with your newly generated image and share it with the people. Put the sticker everywhere, connect with the similar people, people who share the interest in the same NFT collection.</Text>
                </AnimatedSection>
                <AnimatedSection delay={.7}>
                    <Heading type='small'>Sell the NFT</Heading>
                    <Text size='medium' marginBottom='30px'>Creators, resellers, advertise your product! Create an image with the NFT you want to sell and add a link to the application where it's being sold. Put the image on your social networks or stickerize the city.</Text>
                </AnimatedSection>
            </LeftSide>
            <RightSide
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { delay: .9 } }}
            >
                <QR src={qr} />
            </RightSide>
        </Content>
    </AnimatedPage>

const Content = styled.div`
    width: 100%;
`

const LeftSide = styled.div`
    width: calc(70% - 50px);
    display: inline-block;
    vertical-align: top;
    padding: 50px 50px 0 0;
`

const RightSide = styled(motion.div)`
    width: 30%;
    display: inline-block;
    vertical-align: top;
    padding-top: 100px;
`

const QR = styled.img`
    width: 100%;
`

export default LandingPage