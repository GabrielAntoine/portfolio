import { env } from '@/app/env'
import {
  Html,
  Body,
  Container,
  Section,
  Heading,
  Text,
} from '@react-email/components'
import { getTranslations } from 'next-intl/server'
import { StringToHtmlEmail } from './string-to-html-email'

type Props = {
  name: string
  subject: string
  message: string
}

export default async function ContactConfirmationEmail({
  name,
  subject,
  message,
}: Props) {
  const t = await getTranslations('email.ContactConfirmationEmail')
  return (
    <Html>
      <Body
        style={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif' }}
      >
        <Container style={{ padding: '40px 0' }}>
          <Section
            style={{
              backgroundColor: '#ffffff',
              padding: '24px',
              borderRadius: '8px',
            }}
          >
            <Heading style={{ fontSize: '18px', marginBottom: '16px' }}>
              {t('subject', { subject })}
            </Heading>

            <Text>
              {t('content.hello', { name })}
              <br />
              <br />
              {t('content.thank-you', { site: env.BASE_URL.href })}
              <br />
              <br />
              {t('content.copy')}
              <br />
              <br />
            </Text>

            <Section
              style={{
                backgroundColor: '#f2f2f2',
                padding: '16px',
                borderRadius: '6px',
              }}
            >
              <Text style={{ margin: 0 }}>
                <StringToHtmlEmail string={message} />
              </Text>
            </Section>

            <Text
              style={{ fontSize: '12px', color: '#888', marginTop: '16px' }}
            >
              {t('content.automatic')}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
