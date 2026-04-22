import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

/**
 * Fake page to be able to see what the error page looks like
 */
export { default } from '../error'
