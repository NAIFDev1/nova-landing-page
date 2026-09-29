import { Container, Layers, Megaphone, Settings2 } from 'lucide-react'
import { FadeIn, Stagger, StaggerItem } from '../components/ui/motion'

const SOLUTIONS = [
  {
    icon: Layers,
    title: 'Product teams',
    description: 'Plan releases, align roadmaps, and keep design & engineering in the loop.',
  },
  {
    icon: Settings2,
    title: 'Engineering',
    description: 'Track sprints, automate triage, and turn tickets into shipped features faster.',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Coordinate campaigns, briefs, and launches in one shared operational view.',
  },
  {
    icon: Container,
    title: 'Operations',
    description: 'Standardize workflows and keep every cross-functional project auditable.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="border-t border-border/60 py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <FadeIn>
            <p className="label text-primary">Solutions</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              Built for how your team actually works.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nova adapts to the rhythm of any team — from two-person startups to large
              cross-functional organizations.
            </p>
          </FadeIn>

          <Stagger className="grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {SOLUTIONS.map((s) => (
              <StaggerItem
                key={s.title}
                className="group rounded-xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-violet-300 transition-colors group-hover:border-primary/40 group-hover:text-cyan-300">
                  <s.icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}