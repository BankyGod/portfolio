import { motion, useReducedMotion } from 'motion/react'

const easings = [0.22, 1, 0.36, 1]

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  once = true,
  as = 'div',
}) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease: easings }}
    >
      {children}
    </Component>
  )
}

export function Stagger({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', as = 'div' }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: easings },
        },
      }}
    >
      {children}
    </Component>
  )
}
