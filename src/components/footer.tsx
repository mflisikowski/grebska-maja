import Creator from '@/components/creator/mflisikowski'
import Copyright from '@/components/Copyright'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex flex-col items-center space-y-4 lg:w-full lg:flex-row lg:justify-between lg:space-y-0">
        <Copyright />
        <Creator />
      </div>
    </footer>
  )
}
