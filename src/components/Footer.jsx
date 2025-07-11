import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 flex-none">
      <ContainerOuter>
        <div className="py-16">
          <ContainerInner>
            <div className="flex justify-center">
              <p className="text-sm text-zinc-400 dark:text-zinc-500 text-center">
                &copy; {new Date().getFullYear()} Shawn Wilkinson. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
