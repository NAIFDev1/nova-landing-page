import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FadeIn, EASE } from '../components/ui/motion'
import { FAQS } from '../data/content'

function AccordionItem({ q, index }) {
  return (
    <AccordionPrimitive.Item
      value={`item-${index}`}
      className="group overflow-hidden rounded-xl border border-border bg-card/50 transition-colors duration-300 data-[state=open]:border-primary/40"
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          {q.question}
          <motion.span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-data-[state=open]:border-primary/50 group-data-[state=open]:text-primary"
          >
            <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
          </motion.span>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AnimatePresence initial={false}>
        <AccordionPrimitive.Content forceMount>
          {({ open }) => (
            <motion.div
              initial={open ? false : { height: 0, opacity: 0 }}
              animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{q.answer}</p>
            </motion.div>
          )}
        </AccordionPrimitive.Content>
      </AnimatePresence>
    </AccordionPrimitive.Item>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-border/60 py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <FadeIn>
            <p className="label text-primary">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              Frequently asked questions.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Everything you need to know before getting started. Can't find an answer? Reach out
              to our team.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <AccordionPrimitive.Root type="multiple" className="space-y-3">
              {FAQS.map((faq, i) => (
                <AccordionItem key={faq.question} q={faq} index={i} />
              ))}
            </AccordionPrimitive.Root>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}