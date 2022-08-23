import styled from 'styled-components'
import { motion } from 'framer-motion'

import Heading from '@components/Heading'
import Text from '@components/Text'

const AnimatedPage = ({ heading, description, children, withMargin }) => (
    <Container
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }}
        withMargin={withMargin}
    >
        <Heading>{heading}</Heading>
        <Heading type='small' marginBottom='50px' fontFamily='Handlee, sans-serif' color='rgba(150, 150, 150, 1)'>
            {description}
        </Heading>
        {children}
    </Container>
)

const Container = styled(motion.div)`
    position: relative;
    width: 90%;
    padding: 0 5% 50px;
    z-index: 3;
    ${({ withMargin }) => withMargin && 'margin-bottom: 100px;'}
`

export default AnimatedPage
