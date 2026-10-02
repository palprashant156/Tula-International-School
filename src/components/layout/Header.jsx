import { useEffect, useState } from 'react'
import { contact, navLinks } from '../../data/site.js'
import SmartImage from '../ui/SmartImage.jsx'

const NAV_HREFS = {
  'about-tis': '#about',
  academics: '#academics',
  'boarding-life': '#boarding',
  'sports-arts': '#sports',
  achievements: '#mentors',
  admissions: '#enquire-section',
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open ])

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <a className="flex items-center gap-space-sm group" href="#top">
              <SmartImage
                eager
                alt="Tula's International School logo"
                className="h-11 w-auto object-contain"
                src="/logo.png"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight group-hover:text-emerald-vivid transition-colors">
                  Tula&apos;s International School
                </span>
                <span className="font-label-caps text-label-caps text-text-muted tracking-wider">
                  DEHRADUN · ESTD 2012
                </span>
              </div>
            </a>
          </div>
          <nav className="hidden xl:flex items-center gap-space-lg">
            {navLinks.map((link) => (
              <a
                key={link.path}
                className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors"
                href={NAV_HREFS[link.path] ?? '#'}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-space-md">
            <a
              className="hidden sm:flex items-center gap-space-xs text-primary hover:text-emerald-vivid font-label-md text-label-md transition-colors"
              href={contact.phoneHref}
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span className="hidden lg:inline">{contact.phone}</span>
            </a>
            <a
              className="hidden md:inline-flex items-center justify-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary-container hover:bg-emerald-vivid text-on-primary font-label-md text-label-md tracking-wide shadow-sm hover:-translate-y-0.5 transition-all"
              href="#enquire-section"
            >
              <span>Enquire Now</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
            <button
              aria-label="Toggle Navigation Menu"
              className="xl:hidden p-space-xs rounded-lg text-on-surface hover:bg-surface-container transition-colors"
              onClick={() => setOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[26px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {!open ? null : (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-surface-card p-margin-mobile flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="flex flex-col gap-space-lg">
              <div className="flex items-center justify-between pb-space-sm border-b border-border-tactile">
                <span className="font-headline-sm text-headline-sm text-primary">Menu</span>
                <button
                  aria-label="Close Menu"
                  className="p-space-xs rounded text-on-surface hover:bg-surface-container"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <nav className="flex flex-col gap-space-md">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary py-1 transition-colors"
                    href={NAV_HREFS[link.path] ?? '#'}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-space-md pt-space-lg border-t border-border-tactile">
              <a
                className="flex items-center gap-space-xs text-primary font-label-md text-label-md"
                href={contact.phoneHref}
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{contact.phone}</span>
              </a>
              <a
                className="w-full flex items-center justify-center gap-space-xs py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm"
                href="#enquire-section"
                onClick={() => setOpen(false)}
              >
                <span>Enquire Now</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
