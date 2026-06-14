'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function ContactSection() {
  return (
    <section className="pb-12">
      <div className="rounded-2xl border border-border p-6 md:p-8">
        <div className="space-y-6">
          {/* Heading */}
          <div>
            <h2 className="title leading-tight font-mono">
              Let&apos;s build something together
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Available for freelance projects and full-stack web application
              development.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Start a Project
            </Link>

            <Link
              href="mailto:pankaj.py96810@gmail.com"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>

            <Link
              href="https://www.linkedin.com/in/pankaj025/"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <LinkedInLogoIcon className="h-4 w-4" />
            </Link>

            <Link
              href="https://github.com/Pankajkantghz"
              target="_blank"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <GitHubLogoIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Footer */}
          <p className="text-xs text-muted-foreground">
            Typically responds within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}