type Props = {
  code: number
}

export function ErrorBackground({ code }: Props) {
  return (
    <>
      <div className='absolute inset-0 -z-1 bg-[conic-gradient(var(--brand-secondary)_90deg,var(--brand-primary)_90deg,var(--brand-primary)_180deg,var(--brand-secondary)_180deg,var(--brand-secondary)_270deg,var(--brand-primary)_270deg)] mask-[url(#maskError)] bg-size-[calc(var(--wallpaper-grid-sx)*4)_calc(var(--wallpaper-grid-sy)*4)] opacity-70' />
      <svg
        aria-hidden
        className='pointer-events-none fixed -z-100 h-full w-full opacity-0'
      >
        <defs>
          <pattern
            id='patternError'
            x='0'
            y='0'
            width='80'
            height='80'
            patternUnits='userSpaceOnUse'
          >
            <text
              x='40'
              y='40'
              fill='white'
              className='font-mono text-xs font-bold'
              textAnchor='middle'
              dominantBaseline='middle'
              transform='rotate(45 40 40)'
            >
              {code}
            </text>
          </pattern>

          <mask
            id='maskError'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='100%'
            height='100%'
          >
            <rect width='100%' height='100%' fill='url(#patternError)' />
          </mask>
        </defs>
      </svg>
    </>
  )
}
