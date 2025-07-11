import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import logoStorj from '@/images/logos/storj-favicon.png'
import logoProdia from '@/images/logos/prodia.png'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role, isActive }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <div className="flex flex-col h-full relative">
      {/* Status Badge - Top Right */}
      <div className="absolute top-0 right-0">
        <span className={clsx(
          "px-3 py-1 text-sm font-medium rounded-full",
          isActive 
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
            : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
        )}>
          {isActive ? 'Active' : 'Completed'}
        </span>
      </div>

      {/* Card Header with Logo and Company */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-800">
          <Image 
            src={role.logo} 
            alt="" 
            className={clsx(
              role.company === 'Prodia Labs' ? "h-5 w-5 dark:invert dark:brightness-200" : "h-7 w-7"
            )} 
            unoptimized 
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-1 pr-16">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-none">
            {role.company}
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-none">
            {role.title}
          </p>
        </div>
      </div>

      {/* Description */}
      {role.description && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-1 leading-relaxed">
          {role.description}
        </p>
      )}

      {/* Footer with Website and Duration */}
      <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          {role.website ? (
            <Link 
              href={role.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              <span>Visit website</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          ) : (
            <span></span>
          )}
          <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {startLabel} - {endLabel}
          </span>
        </div>
      </div>
    </div>
  )
}

function Resume() {
  let resume = {
    current: [
      {
        company: 'Stealth',
        title: 'Founder, CEO',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        logo: logoPlanetaria,
        website: '',
        start: '2025',
        end: {
          label: 'Present',
          dateTime: new Date().getFullYear().toString(),
        },
      },
      {
        company: 'Stealth',
        title: 'Founder, CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
        logo: logoPlanetaria,
        website: '',
        start: '2025',
        end: {
          label: 'Present',
          dateTime: new Date().getFullYear().toString(),
        },
      },
      {
        company: 'Stealth',
        title: 'Founder, CEO',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        logo: logoPlanetaria,
        website: '',
        start: '2025',
        end: {
          label: 'Present',
          dateTime: new Date().getFullYear().toString(),
        },
      },
    ],
    previous: [
      {
        company: 'Prodia Labs',
        title: 'Founder, CEO',
        description: 'APIs That Power the Next Generation of Creative Tools for AI Images and Video.',
        logo: logoProdia,
        website: 'https://prodia.com',
        start: '2022',
        end: '2024',
      },
      {
        company: 'Storj Labs',
        title: 'Founder, CEO, CTO, CSO',
        description: 'Blazing fast global S3-compatible object storage and compute at the cost of a single region.',
        logo: logoStorj,
        website: 'https://www.storj.io',
        start: '2014',
        end: '2022',
      },
    ],
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        Work Experience
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-zinc-50/50 dark:bg-zinc-800/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              CURRENT WORK
            </h3>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">
              {resume.current.length}
            </span>
          </div>
          <div className="space-y-3">
            {resume.current.map((role, roleIndex) => (
              <div key={roleIndex} className="bg-white dark:bg-zinc-900 rounded-md p-4 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                <Role role={role} isActive={true} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-zinc-50/50 dark:bg-zinc-800/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              PREVIOUS WORK
            </h3>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">
              {resume.previous.length}
            </span>
          </div>
          <div className="space-y-3">
            {resume.previous.map((role, roleIndex) => (
              <div key={roleIndex} className="bg-white dark:bg-zinc-900 rounded-md p-4 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                <Role role={role} isActive={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <Container className="mt-9">
      <div>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Decentralization pioneer, serial founder, and storage innovator.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Shawn, a serial entrepreneur focused on building the future of decentralized 
            infrastructure. From revolutionizing cloud storage at Storj to democratizing AI 
            creative tools at Prodia, I&apos;m passionate about making powerful technology 
            accessible to everyone.
          </p>
          <div className="mt-6 flex gap-6 justify-center">
            <SocialLink href="https://x.com/super3" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="https://github.com/super3"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
        
        <div className="mt-12">
          <Resume />
        </div>
      </div>
    </Container>
  )
}
