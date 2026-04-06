import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)

// Matches the i18n config
export function makeCanonicalUrl(...args: Parameters<typeof getPathname>) {
  const pathname = getPathname(...args)
  const baseUrl = process.env.BASE_URL

  if (!baseUrl) {
    throw new Error(
      'No BASE_URL environment variable provided. Please provide one',
    )
  }

  if (pathname === '/') {
    return baseUrl
  } else {
    return baseUrl + pathname
  }
}
