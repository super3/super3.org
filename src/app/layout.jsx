import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Shawn Wilkinson',
    default:
      'Shawn Wilkinson - Software designer, founder, and amateur astronaut',
  },
  description:
    "I&apos;m Shawn Wilkinson, a software designer and entrepreneur based in New York City. I&apos;m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
