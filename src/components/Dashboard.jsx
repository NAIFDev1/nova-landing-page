import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Clock, LayoutGrid } from 'lucide-react'
import { EASE } from './ui/motion'
import {
  ACTIVITY_POINTS,
  KPI_CARDS,
  RECENT_PROJECTS,
  TEAM_ACTIVITY,
  TODAY_TASKS,
  WORKLOADS,
} from '../data/content'

function KpiCard({ item, delay = 0 }) {
  const Icon = item.trend === 'up' ? ArrowUpRight : ArrowDownRight
  const good = item.trend === 'down-good'
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className="group rounded-xl border border-border bg-card/80 p-4 transition-colors duration-200 hover:border-primary/40"
    >
      <p className="text-xs text-muted-foreground">{item.label}</p>
      <div className="mt-2 flex items-baseline justify-between gap-2">
        <span className="font-display text-2xl font-semibold">{item.value}</span>
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-medium ${
            good
              ? 'bg-emerald-500/10 text-emerald-400'
              : 'bg-violet-500/10 text-violet-300'
          }`}
        >
          <Icon className="h-3 w-3" />
          {item.delta}
        </span>
      </div>
    </motion.div>
  )
}

function ActivityChart({ className = '' }) {
  const max = Math.max(...ACTIVITY_POINTS)
  const step = 100 / (ACTIVITY_POINTS.length - 1)
  const path = ACTIVITY_POINTS.map((v, i) => `${(i * step).toFixed(2)},${(100 - (v / max) * 92 - 4).toFixed(2)}`).join(' ')

  return (
    <svg viewBox="0 0 100 48" className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,48 ${path} 100,48`} fill="url(#chart-fill)" />
      <motion.polyline
        points={path}
        fill="none"
        stroke="url(#chart-line)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }}
      />
    </svg>
  )
}

function WorkloadBar({ label, value, delay = 0 }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium text-foreground">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: EASE, delay }}
        />
      </div>
    </div>
  )
}

export default function Dashboard({ className = '' }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-5 shadow-2xl shadow-black/40 sm:p-6 ${className}`}>
      {/* Window chrome */}
      <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2c2c33]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2c2c33]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2c2c33]" />
        </div>
        <div className="flex items-center gap-2 rounded-md border border-border/60 px-2.5 py-1 text-[11px] text-muted-foreground">
          <LayoutGrid className="h-3 w-3" />
          Overview
        </div>
        <div className="flex items-center gap-1">
          <span className="hidden h-6 w-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 sm:inline-flex" />
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {KPI_CARDS.map((k, i) => (
          <KpiCard key={k.label} item={k} delay={0.15 + i * 0.08} />
        ))}
      </div>

      {/* Chart + workloads */}
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card/40 p-4 lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-muted-foreground">Activity — last 12 weeks</p>
            <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-violet-300">
              +18% vs prev.
            </span>
          </div>
          <ActivityChart className="h-24 w-full" />
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/40 p-4">
          <p className="text-xs font-medium text-muted-foreground">Team workload</p>
          {WORKLOADS.map((w, i) => (
            <WorkloadBar key={w.label} {...w} delay={0.4 + i * 0.12} />
          ))}
        </div>
      </div>

      {/* Projects + tasks + activity */}
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card/40 p-4">
          <p className="mb-3 text-xs font-medium text-muted-foreground">Recent projects</p>
          <ul className="space-y-2.5">
            {RECENT_PROJECTS.map((p) => (
              <li key={p.name} className="flex items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-2 truncate">
                  <span className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${p.color}`} />
                  <span className="truncate text-foreground/90">{p.name}</span>
                </span>
                <span className="shrink-0 text-[11px] text-muted-foreground">{p.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card/40 p-4">
          <p className="mb-3 text-xs font-medium text-muted-foreground">Today's tasks</p>
          <ul className="space-y-2.5">
            {TODAY_TASKS.map((t) => (
              <li key={t.label} className="flex items-center gap-2.5 text-sm">
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    t.done ? 'border-violet-500 bg-violet-500' : 'border-border bg-transparent'
                  }`}
                >
                  {t.done && <Check className="h-3 w-3 text-white" />}
                </span>
                <span className={`${t.done ? 'text-muted-foreground line-through decoration-border' : 'text-foreground/90'}`}>
                  {t.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card/40 p-4">
          <p className="mb-3 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Clock className="h-3 w-3" /> Team activity
          </p>
          <ul className="space-y-3">
            {TEAM_ACTIVITY.map((a) => (
              <li key={a.time + a.initials} className="flex items-start gap-2.5">
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white ${a.color}`}
                >
                  {a.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] leading-snug text-foreground/85">
                    <span className="font-medium text-foreground">{a.initials}</span> {a.action}
                  </p>
                  <p className="text-[11px] text-muted-foreground">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}