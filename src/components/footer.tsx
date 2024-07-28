// import { Container } from '@/components/container'

// export default async function Footer() {
//   return (
//     <Container className="w-full">
//       <></>
//     </Container>
//   )
// }

export default function Example() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-sm leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} mgr Maja Grębska, Wszelkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
