import { VideoDialog } from '@/components/about/video-dialog'
import FadeIn from '@/components/client/fade-in'
import { Container } from '@/components/container'
import { PlayIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

// import { type Metadata } from 'next'
// export const metadata: Metadata = {
//   title: '',
//   description: '',
// }

export default async function AboutPage() {
  return (
    <FadeIn>
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <VideoDialog
            // videoUrl="https://www.youtube.com/embed/33zzlA87raE"
            >
              <div className="group relative cursor-pointer">
                <Image
                  className="aspect-square max-h-[500px] w-full rounded-lg bg-gray-50 object-cover shadow-lg sm:max-h-[700px] lg:mx-auto lg:aspect-[9/16] lg:max-w-lg xl:aspect-[3/4] 2xl:aspect-[3/5]"
                  src="/image.png"
                  width={600}
                  height={400}
                  alt=""
                />

                <div className="absolute inset-0 left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 opacity-5 transition-opacity duration-300 group-hover:opacity-100">
                  <PlayIcon className="h-16 w-16 translate-x-1 text-white transition-transform duration-300 group-hover:scale-105" />
                </div>
              </div>
            </VideoDialog>
          </div>

          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7">O mnie</p>
              <div className="max-w-xl">
                <p className="mt-6 text-xl font-medium leading-8 text-gray-600">
                  Jestem psychologiem, pedagogiem specjalnym oraz
                  psychoterapeutą poznawczo-behawioralnym w trakcie szkolenia.
                  Obecnie realizuję czteroletnie studia w Szkole Psychoterapii
                  Poznawczo-Behawioralnej Uniwersytetu SWPS, które pozwolą mi
                  ubiegać się o Certyfikat Psychoterapeuty
                  Poznawczo-Behawioralnego PTTPB. Ukończyłam także dwuletnie
                  studia podyplomowe na kierunku Stosowana Analiza Zachowania na
                  Uniwersytecie SWPS w Sopocie, gdzie specjalizowałam się w
                  kształtowaniu zachowań dzieci w terapii.
                </p>
                <p className="mt-6 text-lg leading-7 text-gray-600">
                  Moja wiedza jest na bieżąco aktualizowana poprzez uczestnictwo
                  w licznych szkoleniach, konferencjach i stażach, zarówno w
                  Trójmieście, jak i w Norwegii. W 2023 roku odbyłam staż na
                  Oddziale Psychiatrycznym dla osób dorosłych w Wojewódzkim
                  Szpitalu Psychiatrycznym w Gdańsku. Jestem członkiem Polskiego
                  Towarzystwa Terapii Poznawczej i Behawioralnej.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FadeIn>
  )
}
