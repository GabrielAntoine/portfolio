import cryptoTn from '@/assets/thumbnails/crypto.webp'
import ghTn from '@/assets/thumbnails/green-house.webp'
import mlTn from '@/assets/thumbnails/mario-luigi.webp'
import sitytripTn from '@/assets/thumbnails/sitytrip.webp'
import sleepTn from '@/assets/thumbnails/sleep-app.webp'
import twoutterTn from '@/assets/thumbnails/twoutter.webp'
import { StaticImageData } from 'next/image'
import type { Tag } from '@/components/portfolio/projects/project-tags'
import geolives from '@/assets/logos/geolives.jpg'
import csh from '@/assets/logos/csh.webp'
import hepl from '@/assets/logos/hepl.jpg'

// Localized data in /messages :
// projects : name, description, image.alt
// education : title, description

type PortfolioData = {
  name: string
  linkedinUrl: string
  githubUsername: string
  githubUrl: string
  email: string
  jobTitle: string
  birthDate: Date
  projects: {
    id: string
    tags: Tag[]
    image: StaticImageData
    githubRepositoryUrl?: string
    websiteUrl?: string
    readme: string
    mustSee?: true
  }[]
  education: {
    id: string
    start: Date
    end: Date
    institution: string
    logo: StaticImageData
    location: string
    locationUrl: string
    website: string
  }[]
  experience: {
    id: string
    start: Date
    end?: Date
    company: string
    logo: StaticImageData
    location: string
    locationUrl: string
    website: string
  }[]
}

// I might need a generatePortfolioData with react cache for the markdowns

export const portfolioData: PortfolioData = {
  name: 'Gabriel Antoine',
  linkedinUrl: 'https://www.linkedin.com/in/gabriel-antoine-771a10371/',
  githubUsername: 'GabrielAntoine',
  githubUrl: 'https://github.com/GabrielAntoine',
  email: 'pro.gabriel.antoine@gmail.com',
  jobTitle: 'Full Stack Developer',
  birthDate: new Date('2004-05-23'),
  projects: [
    {
      id: 'twoutter',
      image: twoutterTn,
      mustSee: true,
      readme: 'todo',
      githubRepositoryUrl: 'https://github.com/GabrielAntoine/twoutter',
      websiteUrl: 'https://twoutter.gabrielantoine.dev',
      tags: [
        'fullstack',
        'hobby',
        'nextjs',
        'drizzle',
        'socialnetwork',
        'architecture',
      ],
    },
    {
      id: 'mario-luigi',
      image: mlTn,
      readme: 'todo',
      githubRepositoryUrl:
        'https://github.com/GabrielAntoine/javascript-game-mario-and-luigi',
      websiteUrl: 'https://mario-luigi.gabrielantoine.dev',
      tags: ['game', 'school', 'js', 'canvas', 'arcade', 'mathematics'],
    },
    {
      id: 'sitytrip',
      image: sitytripTn,
      readme: 'todo',
      websiteUrl: 'https://sitytrip.com/map/paris',
      tags: [
        'frontend',
        'internship',
        'nextjs',
        'react',
        'tourguide',
        'cartography',
        'restapi',
      ],
    },
    {
      id: 'crypto-cpp',
      image: cryptoTn,
      readme: 'todo',
      githubRepositoryUrl:
        'https://github.com/GabrielAntoine/cryptography-cpp-lib',
      tags: [
        'library',
        'hobby',
        'cpp',
        'cmake',
        'security',
        'compiletimepolymorphism',
      ],
    },
    {
      id: 'green-house',
      image: ghTn,
      readme: 'todo',
      githubRepositoryUrl:
        'https://github.com/GabrielAntoine/green-house-pthread',
      tags: ['game', 'school', 'posix', 'linux', 'arcade', 'multithreading'],
    },
    {
      id: 'sleep-app',
      image: sleepTn,
      readme: 'todo',
      githubRepositoryUrl:
        'https://github.com/GabrielAntoine/flutter-sleep-app',
      tags: [
        'mobile',
        'school',
        'flutter',
        'firebase',
        'productivity',
        'hybridstockage',
      ],
    },
  ],
  education: [
    {
      id: 'bachelor',
      start: new Date('2022-09-01'),
      end: new Date('2025-06-30'),
      institution: 'Haute École de la Province de Liège (HEPL)',
      logo: hepl,
      website: 'https://hepl.be/',
      location: 'Seraing',
      locationUrl:
        'https://www.google.com/maps?q=HEPL+-+Haute+Ecole+de+la+Province+de+Li%C3%A8ge+-+Campus+Parc+des+Mar%C3%AAts',
    },
    {
      id: 'high-school',
      start: new Date('2016-09-01'),
      end: new Date('2022-06-30'),
      institution: 'Collège Saint-Hadelin',
      logo: csh,
      location: 'Visé',
      locationUrl:
        'https://www.google.com/maps?q=Coll%C3%A8ge+Saint-Hadelin+Belgium',
      website: 'http://www.collegesainthadelin.be/',
    },
  ],
  experience: [
    {
      id: 'geolives',
      start: new Date('2025-02-14'),
      end: new Date('2025-05-23'),
      company: 'Geolives Belgium SRL',
      logo: geolives,
      location: 'Liège',
      locationUrl: 'https://www.google.com/maps?q=Geolives+Belgium+SRL',
      website: 'https://www.geolives.com/',
    },
  ],
}
