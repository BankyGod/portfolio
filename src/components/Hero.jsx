import { motion, useReducedMotion } from 'motion/react'
import { assetUrl } from '../utils/assetUrl'

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
      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <motion.p
            className="text-sm font-semibold tracking-[0.22em] text-accent uppercase"
            {...item}
            transition={{ duration: 0.65, ease }}
          >
            {site.location}
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-ink"
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
            className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
            {...item}
            transition={{ duration: 0.7, delay: 0.32, ease }}
          >
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center justify-center bg-ink px-5 py-3 text-sm font-bold text-paper transition hover:bg-deep"
            >
              Email me
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center border border-ink/20 bg-paper/70 px-5 py-3 text-sm font-bold text-ink transition hover:border-ink/40"
            >
              LinkedIn
            </a>
            <a
              href="#work"
              className="inline-flex min-h-11 items-center justify-center px-2 py-3 text-sm font-bold text-accent transition hover:text-ink sm:justify-start"
            >
              See work ↓
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-[22rem]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <div
            className="pointer-events-none absolute -inset-4 rounded-full bg-accent/20 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative aspect-square overflow-hidden rounded-full border-[3px] border-accent/40 bg-paper shadow-[0_20px_50px_rgba(16,20,28,0.14)] ring-4 ring-paper">
            <img
              src={assetUrl('images/michael-owusu.png')}
              alt={`${site.name} — Frontend Developer`}
              className="h-full w-full object-cover object-[center_20%]"
              width={800}
              height={800}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
