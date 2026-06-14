import Link from 'next/link'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container max-w-3xl border-t border-border pt-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="flex flex-wrap items-center gap-8">
            <Link href="/" className="font-serif text-sm font-bold">
              Home
            </Link>

            <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground">
              <li className="transition-colors hover:text-foreground">
                <Link href="/posts">Posts</Link>
              </li>

              <li className="transition-colors hover:text-foreground">
                <Link href="/projects">Projects</Link>
              </li>

              <li className="transition-colors hover:text-foreground">
                <Link href="/contact">Contact</Link>
              </li>

              <li className="transition-colors hover:text-foreground">
                <Link href="/Services">Services</Link>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link
              href="https://www.linkedin.com/in/pankaj025"
              target="_blank"
              className="transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="h-4 w-4" />
            </Link>

            <Link
              href="https://github.com/Pankajkantghz"
              target="_blank"
              className="transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="h-4 w-4" />
            </Link>

            <Link
              href="https://leetcode.com/u/pankaj_c"
              target="_blank"
              className="flex items-center gap-1 text-xs transition-colors hover:text-foreground"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="h-5 w-5 dark:invert"
              />
              
            </Link>

            <Link
              href="https://www.geeksforgeeks.org/user/pankajkantghz"
              target="_blank"
              className="flex items-center gap-1 text-xs transition-colors hover:text-foreground"
            >
              <img
                src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                alt="GFG"
                className="h-5 w-5"
              />
             
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <p className="mt-12 text-xs text-muted-foreground flex justify-center">
          © {new Date().getFullYear()} Pankaj Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  )
}