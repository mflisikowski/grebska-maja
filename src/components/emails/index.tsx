import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'
import * as React from 'react'

interface ContactFormEmailProps {
  name: string
  phone: string
  email: string
  message: string
}

const ContactFormEmail = ({
  name,
  phone,
  email,
  message,
}: ContactFormEmailProps) => {
  const previewText = `New Contact Form Submission from ${name}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-4 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px] text-center">
              <Heading className="mx-0 my-[30px] p-0 text-[24px] font-normal text-black">
                Potwierdzenie wysłania wiadomości
              </Heading>
            </Section>
            <Section className="mb-[32px]">
              <Text className="text-[14px] leading-[24px] text-black">
                <strong>Imię i Nazwisko:</strong> {name}
              </Text>
              <Text className="text-[14px] leading-[24px] text-black">
                <strong>Numer telefonu:</strong> {phone}
              </Text>
              <Text className="text-[14px] leading-[24px] text-black">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-[14px] leading-[24px] text-black">
                <strong>Wiadomość:</strong> {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

ContactFormEmail.PreviewProps = {
  name: 'Jan Kowalski',
  phone: '+123456789',
  email: 'jankowalski@gmail.com',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
} as ContactFormEmailProps

export default ContactFormEmail
