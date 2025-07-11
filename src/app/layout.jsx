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
    "I&apos;m Shawn Wilkinson, a software designer and entrepreneur based on New York City. I&apos;m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=2', type: 'image/x-icon' },
    ],
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
