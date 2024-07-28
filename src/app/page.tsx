import AboutHero from '@/components/about/homepage'
import FadeIn from '@/components/client/fade-in'
import { Container } from '@/components/container'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { type Metadata } from 'next'
import CalendarSection from '@/components/calendar/calendar-section'
import { ContactForm } from '@/components/contact/form'

export const metadata: Metadata = {
  description: `mgr Maja Grębska - Psycholog, pedagog specjalny. Zależy mi na tworzenie bezpiecznej, pełnej szacunku i zrozumienia atmosfery w gabinecie terapeutycznym.`,
  title: 'mgr Maja Grębska',
  openGraph: {
    title: 'mgr Maja Grębska',
    description: `mgr Maja Grębska - Psycholog, pedagog specjalny. Zależy mi na tworzenie bezpiecznej, pełnej szacunku i zrozumienia atmosfery w gabinecie terapeutycznym.`,
  },
  twitter: {
    title: 'mgr Maja Grębska',
    description: `mgr Maja Grębska - Psycholog, pedagog specjalny. Zależy mi na tworzenie bezpiecznej, pełnej szacunku i zrozumienia atmosfery w gabinecie terapeutycznym.`,
  },
  keywords: ['mgr', 'maja', 'grébska', 'psycholog', 'pedagog', 'specjalny'],
  authors: [{ name: 'mgr Maja Grębska' }],
}

export default function HomePage() {
  return (
    <div className="lg:space-y-36">
      <Container className="relative z-10">
        <FadeIn>
          <AboutHero />
        </FadeIn>
      </Container>

      <div id="calendar" className="relative overflow-hidden pt-36 lg:py-16">
        <Container className="relative">
          <CalendarDaysIcon className="absolute -top-16 left-6 h-2/6 w-2/6 -rotate-12 transform text-slate-500 opacity-5 lg:left-1/4 lg:top-1/4 lg:h-1/2 lg:w-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-12" />

          <div className="relative z-10">
            <CalendarSection />
          </div>
        </Container>
      </div>

      <div id="contact" className="relative overflow-hidden pt-36 lg:py-16">
        <Container className="relative">
          <div className="relative z-10">
            <ContactForm />
          </div>
        </Container>
      </div>
    </div>
  )
}
