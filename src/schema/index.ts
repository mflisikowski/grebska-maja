import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(1, 'Pole wymagane'),
  phone: z.string().min(1, 'Pole wymagane'),
  email: z.string().email('Email jest nieprawidłowy').min(1, 'Pole wymagane'),
  message: z.string().min(1, 'Pole wymagane'),
})
