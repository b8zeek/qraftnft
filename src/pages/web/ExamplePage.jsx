import styled from 'styled-components'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from '../../components/Button'

import degen from '../../assets/degen-ape.png'
import qr from '../../assets/qr-code.png'

const ExamplePage = () =>
    <AnimatedPage>
        <Heading>DegenerAPE Yourself</Heading>
        <Text>Link all your social media with your favorite NFT</Text>
        <MainImage src={degen} />
        <QRImage src={qr} />
        <Button>Next</Button>
    </AnimatedPage>

const MainImage = styled.img`
    width: 400px;
    position: absolute;
    top: 200px;
    left: 300px;
    transform: perspective(500px) rotateY(20deg);
`

const QRImage = styled.img`
    width: 400px;
    position: absolute;
    top: 200px;
    left: 330px;
    transform: perspective(500px) rotateY(20deg);
    filter: drop-shadow(-5px 10px 10px rgba(255, 255, 255, .3));
`

export default ExamplePage