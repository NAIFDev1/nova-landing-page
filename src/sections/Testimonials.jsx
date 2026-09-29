import { Quote } from 'lucide-react'
import { FadeIn, Stagger, StaggerItem } from '../components/ui/motion'
import { TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border/60 py-24 md:py-32">
      <div className="container">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="label text-primary">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
            Loved by teams that ship.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            * Testimonials are fictional and shown for demonstration purposes only.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.1}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <Quote className="h-6 w-6 text-primary/70" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}