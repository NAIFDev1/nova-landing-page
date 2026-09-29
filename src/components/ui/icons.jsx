const Icon = ({ children, className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
)

export const LogoMark = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="url(#nova-logo-grad)" />
    <path d="M16 4.5 27.5 16 16 27.5 4.5 16 16 4.5Z" fill="url(#nova-logo-grad2)" />
    <path d="M16 10 22 16l-6 6-6-6 6-6Z" fill="#0B0B10" />
    <defs>
      <linearGradient id="nova-logo-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0B0B10" />
        <stop offset="1" stop-color="#1a1129" />
      </linearGradient>
      <linearGradient id="nova-logo-grad2" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stop-color="#a78bfa" />
        <stop offset="1" stop-color="#22d3ee" />
      </linearGradient>
    </defs>
  </svg>
)

export const SparkleIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
  </Icon>
)

const iconMap = {
  layout: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="5" rx="1.5" />
      <rect x="13.5" y="10.5" width="7.5" height="10.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M15.5 5.4a3.2 3.2 0 0 1 0 5.2" />
      <path d="M17.4 15.4c1.6-.8 2.9-2.4 3.4-4.4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 14l4-4 3 3 5-6" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="4" width="6" height="6" rx="1.5" />
      <path d="M15 7H11a2 2 0 0 0-2 2v6" />
      <rect x="5.5" y="14" width="4" height="6" rx="1.5" />
      <path d="M14 17h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.5V11c0 4.6 3 8 7 9.5 4-1.5 7-4.9 7-9.5V5.5L12 3z" />
      <path d="M9.2 11.8l2 2 3.6-3.8" />
    </>
  ),
  plug: (
    <>
      <path d="M9 7V3M15 7V3" />
      <rect x="6" y="7" width="12" height="8" rx="2" />
      <path d="M10 15v4a2 2 0 0 0 4 0v-4" />
    </>
  ),
}

export const FeatureIcon = ({ name, className }) => (
  <Icon className={className}>
    {iconMap[name] ?? <circle cx="12" cy="12" r="8" />}
  </Icon>
)