import { DialogContent, DialogTrigger, Dialog } from '@/components/ui/dialog'
import { Suspense } from 'react'
import { Loader } from '@/components/loader'

function VideoEmbed({ videoUrl }: { videoUrl: string }) {
  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      src={videoUrl + '?autoplay=1'}
      className="h-full w-full rounded-lg"
      title="YouTube video player"
      allowFullScreen
    ></iframe>
  )
}

export function VideoSkeleton({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-50">
      {children}
    </div>
  )
}

export function VideoDialog({
  videoUrl,
  children,
}: {
  children: React.ReactNode
  videoUrl?: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="px-10 pb-16 pt-16 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <Suspense fallback={<Loader />}>
          {videoUrl ? (
            <VideoSkeleton>
              <VideoEmbed videoUrl={videoUrl} />
            </VideoSkeleton>
          ) : (
            <VideoSkeleton>
              <Loader text="Tutaj powinien wyświetlić się film" />
            </VideoSkeleton>
          )}
        </Suspense>
      </DialogContent>
    </Dialog>
  )
}
