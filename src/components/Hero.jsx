import { motion, useReducedMotion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

export default function Hero({ site }) {
  const reduceMotion = useReducedMotion()

  const item = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section
      id="top"
      className="mesh-hero relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16"
    >
      <motion.div
        className="pointer-events-none absolute -right-10 top-24 hidden h-72 w-72 border border-line/80 lg:block"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-16 top-40 hidden h-40 w-40 bg-accent/15 lg:block"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto w-full max-w-4xl">
        <motion.p
          className="text-sm font-semibold tracking-[0.22em] text-accent uppercase"
          {...item}
          transition={{ duration: 0.65, ease }}
        >
          {site.location}
        </motion.p>

        <motion.h1
          className="mt-5 font-display text-[clamp(3rem,10vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-ink"
          {...item}
          transition={{ duration: 0.75, delay: 0.08, ease }}
        >
          {site.name}
        </motion.h1>

        <motion.p
          className="mt-4 font-display text-xl font-medium text-slate sm:text-2xl"
          {...item}
          transition={{ duration: 0.7, delay: 0.16, ease }}
        >
          {site.title}
        </motion.p>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
          {...item}
          transition={{ duration: 0.7, delay: 0.24, ease }}
        >
          {site.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          {...item}
          transition={{ duration: 0.7, delay: 0.32, ease }}
        >
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center bg-ink px-5 py-3 text-sm font-bold text-paper transition hover:bg-deep"
          >
            Email me
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border border-ink/20 bg-paper/70 px-5 py-3 text-sm font-bold text-ink transition hover:border-ink/40"
          >
            LinkedIn
          </a>
          <a
            href="#work"
            className="inline-flex items-center px-2 py-3 text-sm font-bold text-accent transition hover:text-ink"
          >
            See work ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
