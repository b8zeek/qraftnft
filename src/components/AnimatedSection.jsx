import { motion } from 'framer-motion'

const AnimatedSection = ({ children, delay }) =>
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: delay || .3 } }}
    >
        {children}
    </motion.div>

export default AnimatedSection
