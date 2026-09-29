export const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#topic' },
]

export const TRUSTED_BY = ['Northstar', 'Vertex', 'Orbit', 'Luma', 'Nexus', 'Fathom']

export const FEATURES = [
  {
    icon: 'layout',
    title: 'Smart Workspaces',
    description:
      'Organize projects, documents, and ideas into adaptive workspaces that structure themselves around your work.',
  },
  {
    icon: 'users',
    title: 'Real-Time Collaboration',
    description:
      'Edit together, comment in context, and keep everyone aligned with presence-aware collaboration that just works.',
  },
  {
    icon: 'chart',
    title: 'Advanced Analytics',
    description:
      'Understand velocity, workload, and bottlenecks with actionable insights surfaced directly in your workspace.',
  },
  {
    icon: 'workflow',
    title: 'Automated Workflows',
    description:
      'Turn repetitive steps into automated flows with triggers and actions — no code, no connectors to babysit.',
  },
  {
    icon: 'shield',
    title: 'Secure Infrastructure',
    description:
      'Enterprise-grade encryption, granular permissions, and full audit trails protect every project in your space.',
  },
  {
    icon: 'plug',
    title: 'Powerful Integrations',
    description:
      'Connect the tools your team already uses. Sync data, control access, and keep one source of truth.',
  },
]

export const PRICING = [
  {
    name: 'Starter',
    description: 'For individuals getting organized.',
    monthly: 0,
    yearly: 0,
    cta: 'Start for free',
    features: [
      'Up to 3 workspaces',
      'Unlimited tasks',
      'Basic analytics',
      'Community support',
      'Personal automations',
    ],
  },
  {
    name: 'Pro',
    description: 'For growing teams that ship together.',
    monthly: 19,
    yearly: 15,
    cta: 'Start building',
    highlight: true,
    badge: 'Most popular',
    features: [
      'Unlimited workspaces',
      'Real-time collaboration',
      'Advanced analytics',
      'Unlimited integrations',
      'Advanced automations',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For larger organizations with more needs.',
    monthly: null,
    yearly: null,
    cta: 'Talk to sales',
    features: [
      'Everything in Pro',
      'SSO & SCIM provisioning',
      'Granular permissions',
      'Dedicated success manager',
      'SLA & audit logs',
    ],
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Nova completely changed how our team organizes projects. Planning used to live in five different tools — now it lives in one place.',
    name: 'Alex Morgan',
    role: 'Product Designer',
    initials: 'AM',
  },
  {
    quote:
      'The analytics alone are worth it. We finally see where time actually goes across teams, and the automations gave us hours back every week.',
    name: 'Priya Sharma',
    role: 'Engineering Lead',
    initials: 'PS',
  },
  {
    quote:
      'Onboarding took an afternoon. Our entire operations team moved their workflows over and never looked back.',
    name: 'Marcus Chen',
    role: 'Head of Operations',
    initials: 'MC',
  },
]

export const FAQS = [
  {
    question: 'What is NOVA?',
    answer:
      'NOVA is a modern productivity platform that brings projects, documents, and collaboration into a single workspace. It combines flexible organization with real-time teamwork, analytics, and automation so teams can plan less and ship more.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. The Starter plan is free forever and includes up to three workspaces, unlimited tasks, and personal automations. Upgrade to Pro anytime for advanced analytics, integrations, and team features.',
  },
  {
    question: 'Can I collaborate with my team?',
    answer:
      'Absolutely. NOVA is built for teams — edit together in real time, leave contextual comments, and follow along with presence indicators so everyone knows what is happening, and where.',
  },
  {
    question: 'Does NOVA integrate with other tools?',
    answer:
      'Yes. Pro and Enterprise plans include deep integrations with popular developer, communication, and storage tools. Data syncs both ways so your team keeps a single source of truth.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Security is foundational. Data is encrypted in transit and at rest, permissions are granular, and Enterprise plans include SSO, SCIM provisioning, audit logs, and a full SLA.',
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press kit', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Help center', 'API reference', 'Community', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies'],
  },
]

/* ----------------------------------------------------------------------------
 * Dashboard mock data — all figures are fictional sample data.
 * ------------------------------------------------------------------------- */

export const KPI_CARDS = [
  { label: 'Active projects', value: '24', delta: '+3.2%', trend: 'up' },
  { label: 'Tasks completed', value: '182', delta: '+12.4%', trend: 'up' },
  { label: 'Team velocity', value: '78%', delta: '+4.1%', trend: 'up' },
  { label: 'Cycle time', value: '4.2d', delta: '-0.8d', trend: 'down-good' },
]

export const ACTIVITY_POINTS = [30, 52, 41, 66, 55, 78, 68, 92, 84, 104, 96, 116]

export const WORKLOADS = [
  { label: 'Design', value: 72 },
  { label: 'Engineering', value: 58 },
  { label: 'Marketing', value: 41 },
  { label: 'Operations', value: 29 },
]

export const RECENT_PROJECTS = [
  { name: 'Mobile App Redesign', color: 'from-violet-500 to-cyan-400', status: 'On track' },
  { name: 'Q3 Growth Campaign', color: 'from-fuchsia-500 to-violet-500', status: 'In review' },
  { name: 'Platform Migration', color: 'from-cyan-400 to-sky-500', status: 'At risk' },
  { name: 'Docs Revamp', color: 'from-amber-400 to-orange-500', status: 'On track' },
]

export const TODAY_TASKS = [
  { label: 'Ship onboarding flow', done: true },
  { label: 'Review Q3 roadmap', done: true },
  { label: 'Prep sprint demo', done: false },
  { label: 'Sync with design team', done: false },
]

export const TEAM_ACTIVITY = [
  { initials: 'AS', action: 'completed a task in Mobile App Redesign', time: '2m ago', color: 'bg-violet-500' },
  { initials: 'JR', action: 'commented on Platform Migration', time: '14m ago', color: 'bg-cyan-500' },
  { initials: 'MK', action: 'published the Q3 Growth Campaign', time: '41m ago', color: 'bg-fuchsia-500' },
  { initials: 'LD', action: 'created a new workflow: Bug Triage', time: '1h ago', color: 'bg-emerald-500' },
]