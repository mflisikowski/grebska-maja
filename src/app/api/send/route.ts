import ContactFormEmail from '@/components/emails'
import { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const data = await request.json()
  const { name, phone, email, message } = data

  try {
    const { data, error } = await resend.emails.send({
      from: `www.majagrebska.pl <${process.env.RESEND_SEND_FROM!}>`,
      to: [process.env.RESEND_SEND_TO!],
      cc: [email],
      subject: `Wiadomość od ${name} / ${phone} / ${email}`,
      react: ContactFormEmail({
        name,
        phone,
        email,
        message,
      }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
