import { TRUSTED_BY } from '../data/content'

export default function TrustedBy() {
  return (
    <section className="border-y border-border/60 py-10">
      <div className="container">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by teams at forward-thinking companies
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-x-16">
          {TRUSTED_BY.map((name) => (
            <span
              key={name}
              className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-muted-foreground/60 transition-colors duration-300 hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}