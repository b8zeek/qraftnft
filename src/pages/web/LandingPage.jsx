import styled from 'styled-components'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'
import Text from '../../components/Text'

const LandingPage = () =>
    <AnimatedPage>
        <Heading>Welcome</Heading>
        <Text>Greetings Solana Hacker House Paris!</Text>
    </AnimatedPage>


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background-color: black;
    color: white;
`

export default LandingPage