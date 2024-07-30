import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { cn } from '@/utils'
import { Bars2Icon } from '@heroicons/react/24/outline'

const navigationItems = [
  {
    name: 'O mnie',
    href: '/about',
  },
  {
    name: 'Kalendarz',
    href: '/#calendar',
  },
  {
    name: 'Cennik',
    href: '/#pricing',
  },
  {
    name: 'FAQ',
    href: '/#faq',
  },
  {
    name: 'Kontakt',
    href: '/#contact',
  },
]

export function NavigationMobile() {
  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Bars2Icon className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-screen max-w-sm space-y-2 py-2">
          {navigationItems.map((item) => (
            <DropdownMenuCheckboxItem
              className="flex items-center p-0"
              key={item.name}
            >
              <Link className="flex-1 p-6 text-base" href={item.href}>
                {item.name}
              </Link>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export function NavigationDesktop() {
  return (
    <div className="hidden lg:flex">
      {navigationItems.map((item) => (
        <NavItemLink key={item.name} href={item.href}>
          {item.name}
        </NavItemLink>
      ))}
    </div>
  )
}

export const NavItemLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link
    className={cn(buttonVariants({ variant: 'link' }), 'text-base text-black')}
    href={href}
  >
    {children}
  </Link>
)
