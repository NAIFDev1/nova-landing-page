import { FeatureIcon } from '../components/ui/icons'
import { FadeIn, Stagger, StaggerItem } from '../components/ui/motion'
import { FEATURES } from '../data/content'

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="label text-primary">Features</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
            Everything you need to move forward.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            A complete toolkit for planning, building, and shipping — without hopping between a
            dozen apps.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {FEATURES.map((f) => (
            <StaggerItem
              key={f.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <div
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/0 blur-2xl transition-colors duration-500 group-hover:bg-primary/20"
                aria-hidden="true"
              />
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted/50 text-violet-300 transition-colors duration-300 group-hover:border-primary/40 group-hover:text-cyan-300">
                <FeatureIcon name={f.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}