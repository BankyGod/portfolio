import { motion, useReducedMotion } from 'motion/react'

const easings = [0.22, 1, 0.36, 1]

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: easings }}
    >
      {children}
    </motion.div>
  )
}
