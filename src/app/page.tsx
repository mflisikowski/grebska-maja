import AboutHero from '@/components/about/homepage'
import FadeIn from '@/components/client/fade-in'
import { Container } from '@/components/container'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { type Metadata } from 'next'
import CalendarSection from '@/components/calendar/calendar-section'
import { ContactForm } from '@/components/contact/form'
import PricingSection from '@/components/pricing/homepage'
import OfferSection from '@/components/offer/homepage'
import FaqSection from '@/components/faq/homepage'

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
    <div className="space-y-36 lg:space-y-44">
      <Container>
        <FadeIn>
          <AboutHero />
        </FadeIn>
      </Container>

      <div className="relative overflow-hidden">
        <Container className="relative">
          <CalendarDaysIcon className="absolute -top-16 left-6 h-2/6 w-2/6 -rotate-12 transform text-slate-500 opacity-5 lg:left-1/4 lg:top-1/4 lg:h-1/2 lg:w-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-12" />

          <div id="calendar" className="relative z-10 -scroll-mt-12">
            <CalendarSection />
          </div>
        </Container>
      </div>

      <div id="offer">
        <Container>
          <OfferSection />
        </Container>
      </div>

      <div id="pricing">
        <Container>
          <PricingSection />
        </Container>
      </div>

      <div id="faq" className="scroll-mt-36">
        <Container>
          <FaqSection />
        </Container>
      </div>

      <div id="contact" className="scroll-mt-36">
        <Container>
          <div>
            <ContactForm />
          </div>
        </Container>
      </div>
    </div>
  )
}
