import Image from 'next/image'
import Link from 'next/link'

import authorImage from '@/public/images/authors/pankaj.jpg'

export default function Intro() {
  return (
    <section className="mt-12 flex flex-col-reverse items-start justify-between gap-8 pb-24 md:flex-row md:items-center">
      {/* Content */}
      <div className="max-w-2xl">
        <h1 className="title no-underline leading-tight font-mono">
          Hey, I&apos;m Pankaj.
        </h1>

        <p className="text-muted-foreground mt-5 max-w-xl text-base leading-relaxed">
          Full-stack developer focused on building scalable web applications
          with React, Next.js, Node.js, and TypeScript.
        </p>

        {/* CTA */}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="hover:text-foreground text-sm font-medium underline underline-offset-4 transition-colors"
          >
            View My Projects
          </Link>

          <Link
            href="/contact"
            className="hover:text-foreground text-sm font-medium underline underline-offset-4 transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <Image
          src={authorImage}
          alt="Pankaj"
          width={200}
          height={200}
          priority
          className="rounded-2xl object-cover shadow-m transition duration-300  hover:grayscale-50"
        />
      </div>
    </section>
  )
}