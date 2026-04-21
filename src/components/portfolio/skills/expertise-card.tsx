import { Card, CardContent } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { CurlyBraces } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  description: string
} & ComponentProps<typeof Card>

export function ExpertiseCard({ icon, title, description, ...props }: Props) {
  return (
    <Card variant='brand' {...props}>
      <CardContent>
        <Typography type={'subsubtitle'} as='h4'>
          {icon}
          {title}
        </Typography>
        <div>{description}</div>
      </CardContent>
    </Card>
  )
}
