import { Link } from 'react-router'
import { motion } from 'motion/react'
import ScrollReveal, { Stagger, StaggerItem } from './ScrollReveal'

const panels = ['panel-a', 'panel-b', 'panel-c']

export default function Work({ projects }) {
  return (
    <section id="work" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal className="mb-14 max-w-2xl">
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
            Featured product work.
          </h2>
        </ScrollReveal>

        <Stagger className="space-y-8" delay={0.1}>
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                <Link
                  to={`/work/${project.id}`}
                  className="group grid items-stretch overflow-hidden border border-line transition hover:border-ink/25 lg:grid-cols-[1.1fr_1fr]"
                >
                  <div
                    className={`${panels[index % panels.length]} relative flex min-h-[14rem] flex-col justify-between p-7 text-paper sm:min-h-[16rem] sm:p-9`}
                  >
                    <span className="font-mono text-sm text-accent-bright">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm text-white/70">{project.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center bg-canvas p-7 sm:p-9">
                    <p className="text-base leading-relaxed text-slate sm:text-lg">
                      {project.pitch}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <li
                          key={tech}
                          className="border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold text-slate"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-8 inline-flex text-sm font-bold text-accent transition group-hover:translate-x-1">
                      View case study →
                    </span>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
