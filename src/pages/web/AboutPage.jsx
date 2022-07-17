import styled from 'styled-components'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'

const AboutPage = () =>
    <AnimatedPage>
        <Heading>Who we are?</Heading>
    </AnimatedPage>


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background-color: black;
    color: white;
`

export default AboutPage