import styled from 'styled-components'
import { motion } from 'framer-motion'

const AnimatedPage = ({ children }) =>
    <Content
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: .3 }}
    >
        {children}
    </Content>

const Content = styled(motion.div)`
    position: absolute;
    width: 70%;
    height: calc(100vh - 80px);
    padding: 50px 15%;
    z-index: 3;
`

export default AnimatedPage