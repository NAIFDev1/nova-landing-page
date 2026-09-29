import { Check } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../components/ui/button'
import { FadeIn, Stagger, StaggerItem } from '../components/ui/motion'
import { PRICING } from '../data/content'

export default function Pricing() {
  const [interval, setInterval] = useState('yearly')

  return (
    <section id="pricing" className="border-t border-border/60 py-24 md:py-32">
      <div className="container">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="label text-primary">Pricing</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Start free, upgrade when your team is ready. No setup fees, cancel anytime.
          </p>
        </FadeIn>

        {/* Billing toggle */}
        <FadeIn delay={0.1} className="mt-8 flex items-center justify-center gap-3">
          {['monthly', 'yearly'].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInterval(i)}
              className={cn(
                'relative rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200',
                interval === i
                  ? 'border-primary/50 bg-primary/10 text-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground',
              )}
            >
              {i === 'yearly' && (
                <span className="absolute -right-3 -top-2 rounded-full bg-cyan-500/15 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
                  −20%
                </span>
              )}
              {i === 'monthly' ? 'Monthly' : 'Yearly'}
            </button>
          ))}
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {PRICING.map((p) => {
            const price = p.monthly == null ? null : interval === 'yearly' ? p.yearly : p.monthly
            return (
              <StaggerItem
                key={p.name}
                className={cn(
                  'relative flex flex-col rounded-2xl border p-7 transition-all duration-300',
                  p.highlight
                    ? 'border-primary/60 bg-card shadow-[0_0_40px_-12px_hsl(262_83%_66%/0.35)] lg:-my-3 lg:py-10'
                    : 'border-border bg-card/60 hover:-translate-y-1 hover:border-primary/30',
                )}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-[11px] font-semibold text-white">
                    {p.badge}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  {price == null ? (
                    <span className="font-display text-4xl font-semibold">Custom</span>
                  ) : (
                    <>
                      <span className="font-display text-5xl font-semibold tracking-[-0.03em]">
                        ${price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        / user / {interval === 'yearly' ? 'mo, billed yearly' : 'mo'}
                      </span>
                    </>
                  )}
                </div>

                <Button
                  asChild
                  variant={p.highlight ? 'default' : 'outline'}
                  className="mt-7 w-full"
                  size="lg"
                >
                  <a href="#pricing">{p.cta}</a>
                </Button>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span
                        className={cn(
                          'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
                          p.highlight
                            ? 'bg-violet-500/20 text-violet-300'
                            : 'bg-emerald-500/15 text-emerald-400',
                        )}
                      >
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}