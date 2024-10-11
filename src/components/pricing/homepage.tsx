import { cn } from '@/utils'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

export default function PricingSection() {
  return (
    <>
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Prosty cennik, jasne korzyści
        </h2>
        <p className="mt-6 text-balance text-center text-lg leading-8 text-gray-600">
          Niezależnie od tego, czy chodzi o wstępną konsultację, czy regularną
          terapię indywidualną, cena za pojedynczą sesję obejmuje wszystko,
          czego potrzebujesz dla skutecznej i troskliwej opieki.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="flex flex-col gap-x-3 text-balance text-center text-2xl font-bold tracking-tight text-gray-900 lg:flex-row lg:text-left">
            <span>Konsultacja psychologiczna</span>

            <span>
              <span className="hidden w-full lg:inline">/</span>
              <span className="w-full lg:hidden">oraz</span>
            </span>

            <span>psychoterapia indywidualna</span>
          </h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Moje usługi są dostosowane do Twoich unikalnych potrzeb, zapewniając
            kompleksowe i spersonalizowane podejście do Twojego zdrowia
            psychicznego.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {[
              'Szczegółowy wywiad wstępny i zrozumienie Twoich potrzeb',
              'Ustalanie i omawianie celów terapii',
              'Spersonalizowane sesje terapii indywidualnej',
              'Regularne monitorowanie postępów i dostosowywanie strategii terapeutycznych',
            ].map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  200
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  PLN
                </span>
              </p>

              <Link
                className={cn(
                  buttonVariants(),
                  'group mt-10 flex items-center gap-2',
                )}
                href="/#calendar"
              >
                <span>Umów spotkanie</span>
                <ArrowRightIcon
                  className="inline-flex h-4 w-4 transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>

              <p className="mt-6 text-xs leading-5 text-gray-600">
                Umów się na sesję już dziś i zrób pierwszy krok ku lepszemu
                sobie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
