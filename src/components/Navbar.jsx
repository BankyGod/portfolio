import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

const links = [
  { href: '/#work', id: 'work', label: 'Work' },
  { href: '/#about', id: 'about', label: 'About' },
  { href: '/#skills', id: 'skills', label: 'Skills' },
  { href: '/#experience', id: 'experience', label: 'Experience' },
  { href: '/#contact', id: 'contact', label: 'Contact' },
]

export default function Navbar({ name, resumeUrl }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setActive('')
      return undefined
    }

    if (location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        })
      }
    }

    const ids = links.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHome, location.hash])

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[13.5rem] flex-col justify-between border-r border-line bg-paper/90 px-7 py-8 backdrop-blur-md lg:flex">
        <div>
          <Link to="/" className="block">
            <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
              {initials}
            </span>
            <span className="mt-1 block text-xs font-medium tracking-[0.18em] text-mist uppercase">
              Portfolio
            </span>
          </Link>

          <nav className="mt-14 flex flex-col gap-4" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-active={isHome && active === link.id}
                className="rail-link pl-2 text-sm font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <a
            href={resumeUrl}
            className="inline-flex text-sm font-bold text-accent underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
          >
            Resume
          </a>
          <p className="text-xs leading-relaxed text-mist">{name}</p>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-line bg-paper/95 px-5 backdrop-blur-md lg:hidden">
        <Link to="/" className="font-display text-lg font-extrabold text-ink">
          {initials}
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-full bg-current transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-paper px-5 pt-24 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-display text-3xl font-bold text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={resumeUrl}
              className="mt-4 text-base font-bold text-accent"
              onClick={() => setOpen(false)}
            >
              Resume →
            </a>
          </nav>
        </div>
      ) : null}
    </>
  )
}
