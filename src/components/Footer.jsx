import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'
import { LogoMark } from './ui/icons'
import { FOOTER_COLUMNS } from '../data/content'

const SOCIALS = [
  { label: 'X', href: '#', Icon: Twitter },
  { label: 'GitHub', href: '#', Icon: Github },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'YouTube', href: '#', Icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="font-display text-lg font-semibold tracking-[0.28em]">NOVA</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A modern productivity platform that helps teams organize ideas, manage work, and turn
              projects into results.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-foreground"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-7 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NOVA Labs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Fictional product landing page — built for demonstration.
          </p>
        </div>
      </div>
    </footer>
  )
}