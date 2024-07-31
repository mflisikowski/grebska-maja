import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { buttonVariants } from '@/components/ui/button'
import { EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { cn } from '@/utils'
import Link from 'next/link'
import { Octokit } from 'octokit'
import Image from 'next/image'

export default async function Creator() {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
  const { data } = await octokit.request('GET /users/mflisikowski')

  const { avatar_url, blog, email, bio } = data

  return (
    <div className="flex items-center text-sm leading-5 text-slate-500">
      <p>Realizacja: </p>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link
            href={`https://${blog}`}
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'group flex items-center gap-2 text-zinc-900',
            )}
          >
            <GlobeAltIcon className="inline-block h-4 w-4 transition duration-500 group-hover:rotate-180" />
            <p className="font-semibold">{blog}</p>
          </Link>
        </HoverCardTrigger>

        <HoverCardContent className="w-[400px] rounded-lg bg-white p-4 shadow-lg">
          <div className="flex items-center">
            <Image
              className="mr-4 h-24 w-24 rounded-full"
              height={120}
              width={120}
              src={avatar_url}
              alt="Profile"
            />
            <div className="space-y-0">
              <p className="text-balance text-sm leading-6 text-gray-600">
                {bio}
              </p>
              <p className="flex items-center gap-2 text-balance text-sm text-gray-600">
                <EnvelopeIcon className="inline-block h-4 w-4" />
                <Link
                  href={`mailto:${email}`}
                  className={cn(
                    buttonVariants({ variant: 'link' }),
                    'group flex items-center gap-2 p-0 text-sm text-zinc-500',
                  )}
                >
                  {email}
                </Link>
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
