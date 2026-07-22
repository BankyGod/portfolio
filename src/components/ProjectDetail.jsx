import { Link, useParams } from 'react-router'
import { motion } from 'motion/react'
import { projects, site } from '../data/portfolio'
import Navbar from './Navbar'
import Footer from './Footer'
import ProjectGallery from './ProjectGallery'
import ScrollReveal from './ScrollReveal'

const panels = {
  autobus: 'panel-a',
  nexus: 'panel-b',
}

const ease = [0.22, 1, 0.36, 1]

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return (
      <div className="min-h-svh bg-canvas">
        <Navbar name={site.name} resumeUrl={site.resumeUrl} />
        <div className="flex min-h-svh flex-col justify-center px-5 lg:pl-[13.5rem]">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-extrabold text-ink">Project not found</h1>
            <Link to="/#work" className="mt-6 inline-flex text-sm font-bold text-accent">
              ← Back to work
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-canvas">
      <Navbar name={site.name} resumeUrl={site.resumeUrl} />
      <div className="lg:pl-[13.5rem]">
        <main>
          <section
            className={`${panels[project.id] || 'panel-a'} px-5 pb-16 pt-24 text-paper sm:px-8 lg:px-12 lg:pt-20`}
          >
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease }}
              >
                <Link
                  to="/#work"
                  className="inline-flex text-sm font-semibold text-white/70 transition hover:text-paper"
                >
                  ← Back to work
                </Link>

                <p className="mt-10 text-xs font-bold tracking-[0.24em] text-accent-bright uppercase">
                  Case study
                </p>
                <h1 className="mt-3 font-display text-[clamp(2.5rem,8vw,5rem)] font-extrabold tracking-tight">
                  {project.name}
                </h1>
                <p className="mt-3 text-base text-white/70 sm:text-lg">{project.role}</p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                  {project.pitch}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex bg-paper px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-white"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto grid max-w-5xl gap-14">
              <ScrollReveal>
                <dl className="grid grid-cols-1 gap-5 border border-line bg-paper p-5 sm:grid-cols-3 sm:gap-4 sm:p-8">
                  {project.outcomes.map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-line pb-4 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0"
                    >
                      <dt className="text-[10px] font-bold tracking-[0.16em] text-mist uppercase">
                        {item.label}
                      </dt>
                      <dd className="mt-2 font-display text-base font-bold text-ink sm:text-lg">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  Overview
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
                  {project.overview}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <ProjectGallery images={project.gallery} projectName={project.name} />
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  The challenge
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
                  {project.challenge}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  What I built
                </h2>
                <ul className="mt-5 space-y-3">
                  {project.contribution.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed text-slate">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  Stack
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-line bg-paper px-3 py-1.5 text-sm font-semibold text-slate"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  Results
                </h2>
                <ul className="mt-5 space-y-3">
                  {project.results.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed text-slate">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal className="border-t border-line pt-10">
                <p className="text-sm text-mist">Want to talk about a similar build?</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-flex bg-ink px-5 py-3 text-sm font-bold text-paper transition hover:bg-deep"
                >
                  Email me
                </a>
              </ScrollReveal>
            </div>
          </section>
        </main>
        <Footer name={site.name} />
      </div>
    </div>
  )
}
