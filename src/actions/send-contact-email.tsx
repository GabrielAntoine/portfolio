'use server'

import ContactConfirmationEmail from '@/components/email/contact-confirmation-email'
import { ContactToMyselfEmail } from '@/components/email/contact-to-myself-email'
import { contactFormConstraints as constraints } from '@/constants'
import { portfolioData } from '@/portfolio-data'
import { resend } from '@/resend'
import { getTranslations } from 'next-intl/server'
import z from 'zod'

const messageSchema = z.object({
  name: z.string().trim().min(constraints.name.min).max(constraints.name.max),
  email: z.email().trim().max(constraints.email.max),
  subject: z
    .string()
    .trim()
    .min(constraints.subject.min)
    .max(constraints.subject.max),
  message: z
    .string()
    .trim()
    .min(constraints.message.min)
    .max(constraints.message.max),
})

export async function sendContactEmail(data: z.infer<typeof messageSchema>) {
  const { email, message, name, subject } = messageSchema.parse(data)

  // Send to myself
  await resend.emails.send({
    from: `${name} <${portfolioData.sendingEmail}>`,
    to: portfolioData.email,
    replyTo: email,
    subject,
    react: (
      <ContactToMyselfEmail
        message={message}
        name={name}
        subject={subject}
        email={email}
      />
    ),
  })

  const t = await getTranslations('email.ContactConfirmationEmail')

  // Send confirmation only if the first mail was successfully sent
  await resend.emails.send({
    from: `${portfolioData.name} <${portfolioData.sendingEmail}>`,
    to: email,
    replyTo: portfolioData.email,
    subject: t('subject', { subject }),
    react: (
      <ContactConfirmationEmail
        name={name}
        subject={subject}
        message={message}
      />
    ),
  })
}
