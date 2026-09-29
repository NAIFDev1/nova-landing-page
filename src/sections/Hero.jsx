import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Dashboard from '../components/Dashboard'
import { Button } from '../components/ui/button'
import { SparkleIcon } from '../components/ui/icons'
import { EASE } from '../components/ui/motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
})

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background: grid + glows */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-20rem] h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-10rem] top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp(0)}>
            <Button
              asChild
              variant="ghost"
              className="h-auto rounded-full border border-border bg-muted/40 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <a href="#product">
                <SparkleIcon className="h-3.5 w-3.5" />
                Introducing NOVA 2.0
                <span className="text-primary">Read more</span>
              </a>
            </Button>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-7xl"
          >
            Work Smarter.
            <br />
            <span className="text-gradient">Move Faster.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A powerful workspace designed to help modern teams organize ideas, manage work, and turn
            projects into results.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#pricing">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto"
            >
              <a href="#product">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-muted/40 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Explore Features
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Product preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-4xl md:mt-20"
        >
          <div
            className="absolute -inset-x-8 inset-y-0 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent"
            aria-hidden="true"
          />
          <div className="relative rounded-2xl border border-border bg-gradient-to-b from-white/[0.06] to-transparent p-px">
            <Dashboard className="rounded-[15px]" />
          </div>
          {/* Glow under preview */}
          <div
            className="absolute bottom-[-3rem] left-1/2 h-32 w-4/5 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[90px]"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  )
}