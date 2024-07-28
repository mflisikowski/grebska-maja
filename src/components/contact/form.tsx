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
    console.log(formattedDateString)

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
    <Container className="space-y-24">
      <div className="mx-auto max-w-xs">
        <h2 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Kontakt
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imię i Nazwisko</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
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
                  <FormLabel>Numer telefonu</FormLabel>
                  <FormControl>
                    <Input {...field} type="tel" />
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
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
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
                  <FormLabel>Wiadomość</FormLabel>
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
    </Container>
  )
}
