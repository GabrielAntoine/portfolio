import { Logo } from '@/components/logo'
import { portfolioData } from '@/portfolio-data'
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { env } from './env'

// Image metadata
export const alt = "Gabriel Antoine's website"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

/**
 * Extracted from globals.css (dark mode)
 */
const colors = {
  border: '#4b556366',
  background: '#000000',
  foreground: '#fafafa',
  brand: {
    primary: '#fc5c7d',
    secondary: '#6a82fb',
  },
}

// Image generation
export default async function Image() {
  const inter = await readFile(
    join(process.cwd(), 'src/assets/fonts/Inter_18pt-SemiBold.ttf'),
  )

  return new ImageResponse(
    <div
      style={{
        backgroundImage: `
          linear-gradient(to right, ${colors.border} 1px, transparent 1px),
          linear-gradient(to bottom, ${colors.border} 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundColor: colors.background,
        display: 'flex',
        justifyContent: 'center',
        color: colors.foreground,
        width: '100%',
        height: '100%',
        padding: '150px 80px',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Logo
          height={300}
          style={{ marginRight: '20px', marginLeft: '-10px' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Fullname />
          <Neon />
          <JobTitle />
          <span
            style={{
              marginLeft: '8px',
              marginTop: '20px',
              fontSize: '24',
            }}
          >
            {env.BASE_URL.host}
          </span>
        </div>
      </div>
    </div>,
    {
      // debug: true,
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: inter,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}

function Fullname() {
  const [
    [firstNameFirstLetter, ...firstNameRest],
    [lastNameFirstLetter, ...lastNameRest],
  ] = portfolioData.name.split(' ')

  return (
    <span
      style={{
        fontSize: '96',
        display: 'flex',
        lineHeight: '1',
      }}
    >
      <span
        style={{
          color: colors.brand.primary,
        }}
      >
        {firstNameFirstLetter}
      </span>
      {firstNameRest.join('')}
      <span>&nbsp;</span>
      <span style={{ color: colors.brand.secondary }}>
        {lastNameFirstLetter}
      </span>
      {lastNameRest.join('')}
    </span>
  )
}

function JobTitle() {
  return (
    <span
      style={{
        fontSize: '48',
        marginLeft: '6px',
        lineHeight: '1',
      }}
    >
      {portfolioData.jobTitle}
    </span>
  )
}

function Neon() {
  return (
    <div
      style={{
        width: '100%',
        height: '4px',
        position: 'relative',
        display: 'flex',
        borderRadius: '9999px',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <div
        style={{
          right: '-4',
          bottom: '-2',
          position: 'absolute',
          background: `linear-gradient(to right, ${colors.brand.primary}, ${colors.brand.secondary})`,
          left: '-4',
          top: '-2',
          borderRadius: '9999px',
          filter: 'blur(8px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          background: `linear-gradient(to right, ${colors.brand.primary}, ${colors.brand.secondary})`,
          height: '100%',
          top: '0',
          left: '0',
          borderRadius: '9999px',
        }}
      />
    </div>
  )
}
