import { Scale } from 'lucide-react'
import { Section } from './section'
import { getTranslations } from 'next-intl/server'
import fs from 'fs/promises'
import path from 'path'

export async function License() {
  const t = await getTranslations('License')

  const license = await getLicense()

  return (
    <Section title={t('title')} icon={<Scale />}>
      <pre className='bg-card rounded-sm border p-4 whitespace-pre-wrap'>
        {license}
      </pre>
      <p className='mt-4'>{t('message')}</p>
    </Section>
  )
}

function getLicense() {
  const filePath = path.join(process.cwd(), 'LICENSE')
  return fs.readFile(filePath, 'utf-8')
}
