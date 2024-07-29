import { Container } from '@/components/container'
import { NavigationDesktop, NavigationMobile } from '@/components/navigation'
import UndoButton from '@/components/undo-button'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

export default async function Header() {
  return (
    <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <Container className="w-full">
        <div className="flex min-h-24 items-center justify-between lg:min-h-32">
          <div className="flex-1 text-left">
            <UndoButton />
          </div>

          <div className="flex">
            <NavigationMobile />
            <NavigationDesktop />
          </div>

          <div className="flex-1 text-right">
            <Link
              href="https://www.znanylekarz.pl/maja-grebska/psycholog-psychoterapeuta/pruszcz-gdanski"
              className={cn(
                'hover:bg-[#00b39b]/ bg-[#00b39b]/90 text-sm',
                buttonVariants({ variant: 'ghost' }),
              )}
              target="_blank"
            >
              <Image
                src="/znany-lekarz-logo.svg"
                className="h-4 w-auto"
                width={210}
                height={34}
                alt=""
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
