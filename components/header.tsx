'use client'

import Link from 'next/link'
import ThemeToggle from './theme-toggle'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between py-6">
        <div>
          <Link href="/" className="font-sans text-3xl font-extrabold">
            PY
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 text-sm font-light text-muted-foreground sm:flex">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">Posts</Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">Projects</Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link href="/Services">Services</Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">Contact</Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link href="/resume.pdf" target="_blank">
              Resume
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Hamburger */}
          <button
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-foreground transition-all duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />

            <span
              className={`block h-px w-5 bg-foreground transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`block h-px w-5 bg-foreground transition-all duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 sm:hidden ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <ul className="container flex flex-col gap-4 pb-6 text-sm font-light text-muted-foreground">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts" onClick={() => setOpen(false)}>
              Posts
            </Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link href="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link href="/Services" onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>

          <li className="transition-colors hover:text-foreground">
            <Link
              href="/resume.pdf"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}