import styled from 'styled-components'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import QRCode from '../../components/QRCode'

import { useWallet } from '../../services/useWallet'

const AboutPage = () => {
    const { createConnection, getNftTokenData } = useWallet()
    
    return <AnimatedPage>
        <div>123</div>
        <QRCode text='123' robohashURL='' />
        <button onClick={createConnection}>Connect</button>
        <button onClick={getNftTokenData}>Get NFTs</button>
    </AnimatedPage>
}

export default AboutPage
