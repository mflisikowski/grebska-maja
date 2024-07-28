import { Container } from '@/components/container'
import {
  NavigationDesktop,
  NavigationMobile,
  NavItemLink,
} from '@/components/navigation'
import UndoButton from '@/components/undo-button'

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
            <NavItemLink href="/#contact">Kontakt</NavItemLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
