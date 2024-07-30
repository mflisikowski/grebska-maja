import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { buttonVariants } from '@/components/ui/button'
import HeroTypeAnimation from '@/components/client/hero'
// import { VideoDialog } from '@/components/about/video-dialog'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            mgr Maja Grębska
          </h2>

          <div className="flex min-h-16 items-center text-center lg:min-h-min">
            <HeroTypeAnimation
              className="mx-auto text-xl font-semibold lg:mx-0"
              sequence={[
                'Specjalizuję się w psychoterapii poznawczo-behawioralnej',
                1000,
                'Specjalizuję się w pracy z młodzieżą',
                1000,
                'Specjalizuję się w pracy z dorosłymi',
                1000,
              ]}
              wrapper="div"
              repeat={Infinity}
              speed={60}
            />
          </div>

          <p className="text-balance text-lg leading-loose text-gray-600">
            Pomagam dzieciom, młodzieży i dorosłym w radzeniu sobie z emocjami,
            wyzwaniami życiowymi, problemami w relacjach. Oferuję kompleksową
            pomoc psychologiczną i psychoterapeutyczną dostosowaną do
            indywidualnych potrzeb każdego klienta.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-2">
          <Link
            className={cn(buttonVariants(), 'group flex items-center gap-2')}
            href="#calendar"
          >
            <CheckCircleIcon
              className="inline-flex h-5 w-5 transition group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Sprawdź dostępność
          </Link>

          <Link
            className={cn(
              buttonVariants({ variant: 'link' }),
              'group flex items-center gap-2 text-zinc-900',
            )}
            href="/about"
          >
            Dowiedz się więcej
            <ArrowRightIcon
              className="inline-flex h-4 w-4 transition group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* <VideoDialog videoUrl="https://www.youtube.com/embed/33zzlA87raE"> */}
      {/* cursor-pointer */}
      <div className="group relative">
        <Image
          className="aspect-square max-h-[500px] w-full rounded-lg bg-gray-50 object-cover shadow-lg sm:max-h-[700px] lg:mx-auto lg:aspect-[9/16] lg:max-w-lg xl:aspect-[3/4] 2xl:aspect-[3/5]"
          src="/image.png"
          width={600}
          height={400}
          priority
          alt=""
        />

        {/* <div className="absolute inset-0 left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 opacity-5 transition-opacity duration-300 group-hover:opacity-100">
              <PlayIcon className="h-16 w-16 translate-x-1 text-white transition-transform duration-300 group-hover:scale-105" />
            </div> */}
      </div>
      {/* </VideoDialog> */}
    </div>
  )
}
