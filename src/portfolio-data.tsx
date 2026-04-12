import { ReactNode } from 'react'
import { DrizzleOrmDark } from './components/ui/svgs/drizzleOrmDark'
import { DrizzleOrmLight } from './components/ui/svgs/drizzleOrmLight'

type PortfolioData = {
  name: string
  linkedinUrl: string
  githubUsername: string
  githubUrl: string
  email: string
  birthDate: Date
  projects: {
    name: string
    description: string
    tags: { label: string; icon: ReactNode }[]
    image: {
      src: string
      alt: string
    }
    githubRepositoryUrl?: string
    websiteUrl?: string
    readme: string
  }[]
}

// I might need a generatePortfolioData with react cache for the markdowns

export const portfolioData: PortfolioData = {
  name: 'Gabriel Antoine',
  linkedinUrl: 'https://www.linkedin.com/in/gabriel-antoine-771a10371/',
  githubUsername: 'GabrielAntoine',
  githubUrl: 'https://github.com/GabrielAntoine',
  email: 'pro.gabriel.antoine@gmail.com',
  birthDate: new Date('2004-05-23'),
  projects: Array.from({ length: 6 }).map((_, i) => ({
    name: 'Lorem ' + i,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero laborum aliquam facilis ullam pariatur sint cupiditate rerum veniam. Sed, dicta!',
    tags: [
      {
        label: 'Drizzle',
        icon: (
          <>
            <DrizzleOrmLight className='dark:hidden' />
            <DrizzleOrmDark className='hidden dark:block' />
          </>
        ),
      },
    ],
    image: {
      src: 'https://picsum.photos/1200/500',
      alt: 'Alt',
    },
    readme: 'placeholder',
  })),
}
