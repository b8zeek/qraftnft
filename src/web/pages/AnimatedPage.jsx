import styled from 'styled-components'
import { motion } from 'framer-motion'

import Heading from '@components/Heading'
import Text from '@components/Text'

const AnimatedPage = ({ heading, description, children, withMargin }) => (
    <Container
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.3 }}
        withMargin={withMargin}
    >
        <Heading>{heading}</Heading>
        <Text marginBottom='20px'>{description}</Text>
        {children}
    </Container>
)

const Container = styled(motion.div)`
    position: relative;
    width: 90%;
    padding: 0 5%;
    z-index: 3;
    ${({ withMargin }) => withMargin && 'margin-bottom: 100px;'}
`

export default AnimatedPage
