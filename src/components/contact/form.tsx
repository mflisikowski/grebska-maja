'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'
import { ContactSchema } from '@/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { useState } from 'react'
import { Container } from '@/components/container'
import { createFormattedDateString } from '@/utils'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

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

  return (
    <Container className="">
      <div className="grid max-w-7xl grid-cols-1 space-y-24 lg:grid-cols-2 lg:gap-20 lg:space-y-0">
        <div className="mx-auto max-w-xl space-y-14 lg:mx-0 lg:max-w-lg">
          <div className="space-y-8">
            <h2 className="text-balance text-left text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Czekam na Twoje Zapytanie
            </h2>

            <p className="text-balance text-lg leading-8">
              Jeśli masz pytania, potrzebujesz wsparcia, lub chcesz dowiedzieć
              się więcej?
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

          <dl className="space-y-4 text-base leading-7">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6" />
              </dt>
              <dd>Ul. Borówkowa 32, Rotmanka k. Pruszcza Gdańskiego</dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon aria-hidden="true" className="h-7 w-6" />
              </dt>
              <dd>
                <a href="tel:+48883937022" className="hover:text-gray-900">
                  +48 883 937 022
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon aria-hidden="true" className="h-7 w-6" />
              </dt>
              <dd>
                <a
                  href="mailto:kontakt@majagrebska.pl"
                  className="hover:text-gray-900"
                >
                  kontakt@majagrebska.pl
                </a>
              </dd>
            </div>
          </dl>
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
                      <FormLabel className="text-base">
                        Imię i Nazwisko
                      </FormLabel>
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
                      <FormLabel className="text-base">
                        Numer telefonu
                      </FormLabel>
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
    </Container>
  )
}
