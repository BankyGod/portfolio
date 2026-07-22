import ScrollReveal, { Stagger, StaggerItem } from './ScrollReveal'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="scroll-mt-24 bg-deep py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-xs font-bold tracking-[0.24em] text-accent-bright uppercase">Skills</p>
          <h2 className="mt-3 max-w-lg font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
            Tools behind the shipping speed.
          </h2>
        </ScrollReveal>

        <Stagger className="mt-14 grid gap-10 sm:grid-cols-2" delay={0.08}>
          {skills.map((group) => (
            <StaggerItem key={group.group} className="border-t border-white/15 pt-5">
              <h3 className="text-xs font-bold tracking-[0.2em] text-accent-bright uppercase">
                {group.group}
              </h3>
              <p className="mt-4 font-display text-lg font-medium leading-relaxed text-white/85 sm:text-xl">
                {group.items.join(' · ')}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
