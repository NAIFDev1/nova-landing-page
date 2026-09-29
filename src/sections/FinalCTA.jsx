import { ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { FadeIn } from '../components/ui/motion'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 py-28 md:py-40">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-96 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container relative text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Ready to work <span className="text-gradient">differently?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Bring your projects, ideas, and team together in one powerful workspace.
          </p>
          <div className="mt-9 flex justify-center">
            <Button asChild size="lg" className="group px-9">
              <a href="#pricing">
                Start Building
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Free for individuals · No credit card required
          </p>
        </FadeIn>
      </div>
    </section>
  )
}