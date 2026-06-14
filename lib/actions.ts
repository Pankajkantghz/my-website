'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['pankaj.py96810@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      react: ContactFormEmail({
        name,
        email,
        message
      })
    })

    console.log('Email response:', response)

    if (response.error) {
      throw new Error(response.error.message)
    }

    return { success: true }
  } catch (error) {
    console.error('Send email error:', error)

    return {
      error: error instanceof Error ? error.message : 'Failed to send email'
    }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (!result.success) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['pankaj.py96810@gmail.com'],
      subject: 'New Newsletter Subscriber',
      text: `New subscriber email: ${email}`
    })

    console.log('Newsletter response:', response)

    if (response.error) {
      throw new Error(response.error.message)
    }

    return { success: true }
  } catch (error) {
    console.error('Subscribe error:', error)

    return {
      error: error instanceof Error ? error.message : 'Failed to subscribe'
    }
  }
}
