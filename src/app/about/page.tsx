import FadeIn from '@/components/client/fade-in'
import { Container } from '@/components/container'
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
            {/* <VideoDialog videoUrl="https://www.youtube.com/embed/33zzlA87raE"> */}
            <div className="group relative cursor-pointer">
              <Image
                className="aspect-square max-h-[500px] w-full rounded-lg bg-gray-50 object-cover shadow-lg sm:max-h-[700px] lg:mx-auto lg:aspect-[9/16] lg:max-w-lg xl:aspect-[3/4] 2xl:aspect-[3/5]"
                src="/image.png"
                width={600}
                height={400}
                alt=""
              />

              {/* <div className="absolute inset-0 left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 opacity-5 transition-opacity duration-300 group-hover:opacity-100">
                <PlayIcon className="h-16 w-16 translate-x-1 text-white transition-transform duration-300 group-hover:scale-105" />
              </div> */}
            </div>
            {/* </VideoDialog> */}
          </div>

          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7">O mnie</p>
              <div className="max-w-xl">
                <p className="mt-6 text-xl font-medium leading-8 text-gray-600">
                  Jestem psychologiem, psychoterapeutą poznawczo-behawioralnym w
                  trakcie szkolenia oraz pedagogiem specjalnym. Obecnie
                  realizuję czteroletnie studia w Szkole Psychoterapii
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

                <p className="mt-6 text-lg leading-7 text-gray-600">
                  Nieprzerwanie od 2015 roku pracuję z dziećmi i młodzieżą z
                  trudnościami w zakresie emocji, umiejętności społecznych,
                  koncentracji, z zaburzeniami zachowania, mowy , ADHD oraz
                  zaburzeniami rozwoju (autyzm, zespół Aspergera). Udzielam
                  również poradnictwa dla rodziców, które ma na celu wsparcie
                  ich w radzeniu sobie z emocjami i trudnymi zachowaniami
                  dzieci.
                </p>

                <p className="mt-6 text-lg leading-7 text-gray-600">
                  Prowadzę również terapię osób dorosłych. Zapraszam do kontaktu
                  osoby, które znalazły się w trudnej sytuacji życiowej,
                  doświadczają lęku, ataków paniki, problemów w relacjach, mają
                  obniżony nastrój, cierpią na zaburzenia ze spektrum autyzmu,
                  ADHD.
                </p>

                <p className="mt-6 text-lg leading-7 text-gray-600">
                  Pomagając pacjentom opieram się na zasadach psychoterapii
                  poznawczo behawioralnej, wykorzystując elementy 3 fali
                  (terapia schematu, terapia dialektyczno-behawioralna). Ważne
                  dla mnie jest nawiązanie pozytywnej współpracy oraz relacji
                  opartej na poczuciu bezpieczeństwa i szacunku. Ogromnie zależy
                  mi również na atmosferze akceptacji i zrozumienia w gabinecie
                  terapeutycznym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FadeIn>
  )
}
