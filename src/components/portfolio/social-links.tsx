import { portfolioData } from '@/portfolio-data'
import { FileText, Mail } from 'lucide-react'
import { LuGithub } from 'react-icons/lu'
import { TbBrandLinkedin } from 'react-icons/tb'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export async function SocialLinks() {
  const t = await getTranslations('SocialLinks')

  const iconLinks = [
    {
      name: 'linkedin', // allow to get the hint [name]-hint, and label [name]-label
      url: portfolioData.linkedinUrl,
      icon: <TbBrandLinkedin className='size-9' />,
    },
    {
      name: 'github',
      url: portfolioData.githubUrl,
      icon: <LuGithub className='size-8' />,
    },
    {
      name: 'mail',
      url: `mailto:${portfolioData.email}`,
      icon: <Mail className='size-9' />,
    },
    {
      name: 'cv',
      url: '/cv.pdf',
      icon: <FileText className='size-7.5' />,
    },
  ]

  return iconLinks.map((link) => (
    <Tooltip key={link.name}>
      <TooltipTrigger asChild>
        <Button size={'icon-xl'} variant={'ghost'} asChild>
          <span>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              aria-label={t(`${link.name}-label`)}
              href={link.url}
            >
              {link.icon}
            </Link>
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{t(`${link.name}-hint`)}</TooltipContent>
    </Tooltip>
  ))
}
