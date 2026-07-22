import ScrollReveal, { Stagger, StaggerItem } from './ScrollReveal'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">Experience</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
            Where the work happened.
          </h2>
        </ScrollReveal>

        <Stagger className="mt-12 overflow-hidden border border-line" delay={0.08}>
          {experience.map((item, index) => (
            <StaggerItem
              key={`${item.org}-${item.role}`}
              className={`grid gap-3 px-5 py-7 sm:grid-cols-[9.5rem_1fr] sm:gap-8 sm:px-7 ${
                index !== experience.length - 1 ? 'border-b border-line' : ''
              } ${index % 2 === 0 ? 'bg-canvas/60' : 'bg-paper'}`}
            >
              <p className="pt-1 font-mono text-[11px] font-semibold tracking-wide text-mist uppercase">
                {item.period}
              </p>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">{item.role}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{item.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">{item.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
