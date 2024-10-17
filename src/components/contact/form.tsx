'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactSchema } from '@/schema'
import { cn, createFormattedDateString } from '@/utils'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Loader } from '../loader'

export const ContactForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    reValidateMode: 'onSubmit',
  })

  const onSubmit = async (formData: z.infer<typeof ContactSchema>) => {
    setLoading(true)

    const date = new Date()
    const formattedDateString = createFormattedDateString(date)

    await fetch(`/api/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(formData),
    })
      .then(() => {
        setLoading(false)

        toast('Wiadomość została wysłana!', {
          description: formattedDateString,
          action: {
            label: 'Zamknij',
            onClick: () => console.log('Undo clicked'),
          },
        })

        form.reset()
      })
      .catch((error) => {
        toast('Wiadomość nie została wysłana!', {
          description: `${formattedDateString}, ${error}`,
          action: {
            label: 'Zamknij',
            onClick: () => console.log('Undo clicked'),
          },
        })
        setLoading(false)
      })
  }

  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/map'), {
        loading: () => (
          <div className="flex h-full w-full items-center justify-center">
            <Loader />
          </div>
        ),
        ssr: false,
      }),
    [],
  )

  return (
    <div className="grid grid-cols-1 space-y-24 lg:grid-cols-2 lg:gap-20 lg:space-y-0">
      <div className="mx-auto max-w-xl space-y-14 lg:mx-0 lg:max-w-lg">
        <div className="space-y-8 text-center lg:text-left">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Czekam na Twoje Zapytanie
          </h2>

          <p className="text-balance text-lg leading-8">
            Masz pytania, potrzebujesz wsparcia, lub chcesz dowiedzieć się
            więcej?
          </p>

          <p className="text-balance text-base leading-8">
            Skontaktuj się ze mną już dziś! Wypełnij formularz kontaktowy,
            zadzwoń lub wyślij e-mail.
          </p>

          <p className="text-balance text-base leading-8">
            Z przyjemnością udzielę Ci odpowiedzi i pomogę znaleźć najlepsze
            rozwiązania. Oczekuję na Twoją wiadomość!
          </p>
        </div>

        <div className="mx-auto max-w-xs space-y-4 text-base leading-7 lg:mx-0">
          <div className="flex gap-x-4">
            <Drawer>
              <DrawerTrigger className="w-full">
                <div className="flex w-full items-center gap-x-4">
                  <BuildingOffice2Icon
                    className="h-7 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="flex w-full flex-col gap-x-4 text-balance text-left hover:underline">
                    <span className="text-nowrap">
                      Ul. Krótka 1A, Pruszcz Gdański
                    </span>
                    <span className="text-wrap">
                      (przystanek autobusowy Pruszcz Gdański, Chopina)
                    </span>
                  </p>
                </div>
              </DrawerTrigger>
              <DrawerContent aria-describedby="address-description">
                <DrawerHeader>
                  <DrawerTitle>
                    <p className="flex items-center justify-center gap-x-2 text-balance">
                      <BuildingOffice2Icon
                        aria-hidden="true"
                        className="h-7 w-6"
                      />{' '}
                    </p>

                    <p className="flex flex-col space-y-4">
                      <span>Ul. Krótka 1A, Pruszcz Gdański</span>
                      <span>
                        (przystanek autobusowy Pruszcz Gdański, Chopina)
                      </span>
                    </p>
                  </DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>

                <div
                  className="bg-white-700 mx-auto my-5 h-[480px] w-[98%]"
                  data-vaul-no-drag
                >
                  <Map posix={[54.2640557, 18.6370325]} />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex items-center">
            <Link
              href="tel:+48883937022"
              target="_blank"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'group flex items-center gap-2 p-0 text-zinc-900',
              )}
            >
              <PhoneIcon aria-hidden="true" className="h-7 w-6" />
              +48 883 937 022
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="mailto:kontakt@majagrebska.pl"
              target="_blank"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'group flex items-center gap-2 p-0 text-zinc-900',
              )}
            >
              <EnvelopeIcon aria-hidden="true" className="h-7 w-6" />
              kontakt@majagrebska.pl
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Imię i Nazwisko</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" className="min-h-16" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Numer telefonu</FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" className="min-h-16" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">E-mail</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" className="min-h-16" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Wiadomość</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={10} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Wysyłanie...' : 'Wyślij'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
