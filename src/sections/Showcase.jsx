import { motion } from 'framer-motion'
import { Check, Folder, GanttChart, MessageSquare, Plus } from 'lucide-react'
import { FadeIn, FadeInScale } from '../components/ui/motion'

/* ---- Mock UIs used by the showcase ---- */

function OrganizeMock() {
  const boards = [
    { name: 'Roadmap', items: 12 },
    { name: 'Design system', items: 8 },
    { name: 'Launch plan', items: 16 },
    { name: 'Research', items: 5 },
    { name: 'Ideas', items: 23 },
    { name: 'Archive', items: 4 },
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xl shadow-black/30">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-display text-sm font-semibold">Product workspace</p>
          <p className="text-xs text-muted-foreground">6 boards · 48 items</p>
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground">
          <Plus className="h-4 w-4" />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {boards.map((b, i) => (
          <motion.div
            key={b.name}
            className={`rounded-xl border p-3 ${
              i === 0
                ? 'border-primary/40 bg-violet-500/10'
                : 'border-border bg-card/50'
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.06 }}
          >
            <div className="flex items-center gap-1.5">
              <Folder className="h-3.5 w-3.5 text-violet-300" />
              <span className="text-[13px] font-medium">{b.name}</span>
            </div>
            <p className="mt-1.5 text-[11px] text-muted-foreground">{b.items} items</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsMock() {
  const bars = [42, 66, 38, 80, 58, 92, 70, 100]
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xl shadow-black/30">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-sm font-semibold">Velocity report</p>
        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
          ▲ 12.4% this month
        </span>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2.5">
        {[
          { l: 'Tasks done', v: '182' },
          { l: 'Avg. cycle', v: '4.2d' },
          { l: 'On-time', v: '94%' },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-border bg-card/50 p-2.5">
            <p className="text-[11px] text-muted-foreground">{s.l}</p>
            <p className="mt-0.5 font-display text-lg font-semibold">{s.v}</p>
          </div>
        ))}
      </div>
      <div className="flex h-28 items-end gap-2 rounded-lg border border-border bg-card/50 p-3">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-500/70 to-cyan-400/70"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </div>
    </div>
  )
}

function AutomateMock() {
  const nodes = [
    { icon: 'trigger', label: 'When a task is completed' },
    { icon: 'step', label: 'Tag project as “updated”' },
    { icon: 'action', label: 'Notify #releases channel' },
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xl shadow-black/30">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-sm font-semibold">Workflow builder</p>
        <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-violet-300">
          3 steps
        </span>
      </div>
      <div className="space-y-2">
        {nodes.map((n, i) => (
          <motion.div
            key={n.label}
            className="relative rounded-xl border border-border bg-card/50 p-3"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12 }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                  i === 0 ? 'bg-cyan-500/15 text-cyan-300' : i === 1 ? 'bg-violet-500/15 text-violet-300' : 'bg-emerald-500/15 text-emerald-300'
                }`}
              >
                {i === 0 ? <GanttChart className="h-3.5 w-3.5" /> : i === 1 ? <MessageSquare className="h-3.5 w-3.5" /> : <Check className="h-3.5 w-3.5" />}
              </span>
              <span className="text-[13px] font-medium">{n.label}</span>
            </div>
            {i < nodes.length - 1 && (
              <span className="absolute -bottom-2.5 left-[1.4rem] h-3 w-px bg-border" aria-hidden="true" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ---- Reusable two-column layout ---- */

const bullets = [
  'Flexible views for every workflow',
  'Real-time synced across the team',
  'No migration headache',
]

export default function Showcase() {
  return (
    <section id="product" className="border-t border-border/60 py-24 md:py-32">
      <div className="container space-y-24 md:space-y-32">
        {/* 01 Organize */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="label text-primary">Organize Everything</p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              One home for every idea, plan, and project.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nova gives every team a place to think. Group work into clear, flexible spaces so the
              signal is easy to find and nothing gets buried.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </FadeIn>
          <div
            className="relative rounded-2xl border border-border bg-gradient-to-b from-white/[0.05] to-transparent p-px"
          >
            <FadeInScale>
              <OrganizeMock />
            </FadeInScale>
          </div>
        </div>

        {/* 02 Understand progress */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className="order-2 rounded-2xl border border-border bg-gradient-to-b from-white/[0.05] to-transparent p-px lg:order-1"
          >
            <FadeInScale>
              <AnalyticsMock />
            </FadeInScale>
          </div>
          <FadeIn className="order-1 lg:order-2">
            <p className="label text-primary">Understand Your Progress</p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              See the work that actually moves the needle.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Turn raw activity into clear, honest insight. Track velocity, spot bottlenecks early,
              and know exactly where to focus next.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-foreground/90">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Check className="h-3 w-3" />
                </span>
                Live dashboards that update as you work
              </li>
              <li className="flex items-center gap-2.5 text-sm text-foreground/90">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Check className="h-3 w-3" />
                </span>
                Compare periods to see real trends
              </li>
            </ul>
          </FadeIn>
        </div>

        {/* 03 Automate */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="label text-primary">Automate Repetitive Work</p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              Point-and-click automation, built in.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Chain triggers, steps, and actions to remove the manual busywork. Your team ships
              faster and stays focused on the work that matters.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-foreground/90">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Check className="h-3 w-3" />
                </span>
                No code required — build flows visually
              </li>
              <li className="flex items-center gap-2.5 text-sm text-foreground/90">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Check className="h-3 w-3" />
                </span>
                Trigger from any workspace event
              </li>
            </ul>
          </FadeIn>
          <div className="relative rounded-2xl border border-border bg-gradient-to-b from-white/[0.05] to-transparent p-px">
            <FadeInScale>
              <AutomateMock />
            </FadeInScale>
          </div>
        </div>
      </div>
    </section>
  )
}