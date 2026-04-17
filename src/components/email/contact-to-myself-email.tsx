import { Body, Html } from '@react-email/components'
import { StringToHtmlEmail } from './string-to-html-email'

type Props = {
  subject: string
  message: string
  name: string
  email: string
}

export function ContactToMyselfEmail({ subject, email, message, name }: Props) {
  return (
    <Html>
      <Body>
        <p>
          <strong>Message envoyé depuis le formulaire du site</strong>
        </p>
        <p>
          <strong>Nom de l&apos;expéditeur : </strong>
          {name}
        </p>
        <p>
          <strong>Email de l&apos;expéditeur : </strong>
          {email}
        </p>
        <p>
          <strong>Objet : </strong>
          {subject}
        </p>
        <p>
          <strong>Message : </strong>
        </p>
        <br />
        <StringToHtmlEmail string={message} />
      </Body>
    </Html>
  )
}
