import ScrollReveal, { Stagger, StaggerItem } from './ScrollReveal'

export default function About({ about }) {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-12">
        <ScrollReveal>
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">About</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
            Practical builder.
            <span className="mt-1 block text-mist">Production mindset.</span>
          </h2>
        </ScrollReveal>

        <div>
          <ScrollReveal delay={0.08}>
            <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              {about.intro}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14} className="mt-8 space-y-4 text-[15px] leading-relaxed text-mist">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ScrollReveal>

          <Stagger className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8" delay={0.1}>
            {about.highlights.map((item) => (
              <StaggerItem key={item}>
                <p className="text-sm font-bold text-ink">
                  <span className="mr-2 text-accent">▸</span>
                  {item}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
