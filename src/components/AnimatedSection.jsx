import { motion } from 'framer-motion'

const AnimatedSection = ({ children, delay = 0 }) => (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay } }}>
        {children}
    </motion.div>
)

export default AnimatedSection
