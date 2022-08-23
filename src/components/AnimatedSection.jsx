import { motion } from 'framer-motion'

const AnimatedSection = ({ children, delay = 0, initial = { scale: 0 }, animate = { scale: 1 } }) => (
    <motion.div initial={{ ...initial }} animate={{ ...animate, transition: { delay } }}>
        {children}
    </motion.div>
)

export default AnimatedSection
