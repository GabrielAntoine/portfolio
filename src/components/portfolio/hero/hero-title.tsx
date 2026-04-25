import { portfolioData } from '@/portfolio-data'
import { CSSProperties } from 'react'
import './hero.css'

export function HeroTitle() {
  const fullname = portfolioData.name
  const names = portfolioData.name.split(' ')
  const [firstName] = names

  return (
    <h1
      aria-label={fullname}
      className='max-w-full text-center text-[clamp(var(--text-3xl),10vw,var(--text-7xl))] leading-[1em] font-bold'
    >
      <span aria-hidden className='flex flex-wrap justify-center gap-[0.2em]'>
        {names.map((name, i) => (
          <span
            key={i}
            className='odd:first-letter:text-brand-primary even:first-letter:text-brand-secondary block'
          >
            {name.split('').map((letter, j) => {
              const absoluteIndex = j + (i === 1 ? firstName.length : 0)
              return (
                <span
                  key={j}
                  data-word={i + 1}
                  style={
                    {
                      '--wave-color':
                        absoluteIndex % 2 === 0
                          ? 'var(--brand-primary)'
                          : 'var(--brand-secondary)',
                      '--i': absoluteIndex,
                    } as CSSProperties
                  }
                  className='not-first:animate-[wave_4s_calc(5s+0.1s*var(--i))_infinite]'
                >
                  {letter}
                </span>
              )
            })}
          </span>
        ))}
      </span>
    </h1>
  )
}
