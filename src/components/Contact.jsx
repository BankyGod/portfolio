import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import { motion } from 'motion/react'
import ScrollReveal, { Stagger, StaggerItem } from './ScrollReveal'

const socialItems = [
  { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedinIn },
  { key: 'instagram', label: 'Instagram', Icon: FaInstagram },
  { key: 'x', label: 'X', Icon: SiX },
  { key: 'facebook', label: 'Facebook', Icon: FaFacebookF },
  { key: 'whatsapp', label: 'WhatsApp', Icon: FaWhatsapp },
  { key: 'github', label: 'GitHub', Icon: FaGithub },
]

export default function Contact({ site }) {
  const socials = site.socials || {}

  return (
    <section id="contact" className="mesh-dark scroll-mt-24 py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-xs font-bold tracking-[0.24em] text-accent-bright uppercase">
            Contact
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4rem)] font-extrabold leading-[1.02] tracking-tight">
            Ready when you are.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65">
            Roles, freelance, or founder collaborations — send a note and let&apos;s talk about what
            you&apos;re building.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <a
            href={`mailto:${site.email}`}
            className="mt-12 block break-all font-display text-[clamp(1.4rem,4vw,2.75rem)] font-bold tracking-tight text-accent-bright transition hover:text-paper"
          >
            {site.email}
          </a>
        </ScrollReveal>

        <Stagger className="mt-10 flex flex-wrap items-center gap-3" delay={0.16}>
          {socialItems.map(({ key, label, Icon }) => {
            const href = socials[key]
            if (!href) return null

            return (
              <StaggerItem key={key}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-12 w-12 items-center justify-center border border-white/25 text-paper transition hover:border-accent-bright hover:bg-paper hover:text-ink"
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              </StaggerItem>
            )
          })}
        </Stagger>

        <ScrollReveal delay={0.2}>
          <a
            href={site.resumeUrl}
            className="mt-8 inline-flex text-sm font-bold text-white/70 transition hover:text-paper"
          >
            Resume →
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
