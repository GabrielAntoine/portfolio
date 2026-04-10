import { routing } from '@/i18n/routing'
import { MetadataRoute } from 'next'
import { env } from './env'
import { getPathname } from '@/i18n/navigation'
import { Locale } from 'next-intl'

export default function sitemap(): MetadataRoute.Sitemap {
  return localizeMany([
    {
      path: '/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      path: '/cv.pdf',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ])
}

type SiteMapUnlocalizedEntry = Omit<
  MetadataRoute.Sitemap extends (infer T)[] ? T : never,
  'url'
> & { path: string }

function localize({
  path,
  ...entry
}: SiteMapUnlocalizedEntry): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    ...entry,
    url: makeUrl(locale, path),
    alternates: {
      languages: {
        ...Object.fromEntries(
          routing.locales.map((locale) => [locale, makeUrl(locale, path)]),
        ),
        'x-default': makeUrl(routing.defaultLocale, path),
      },
    },
  }))
}

function makeUrl(locale: Locale, path: string) {
  const url = new URL(getPathname({ locale, href: path }), env.BASE_URL).href

  // Remove trailing slash if one
  if (url.endsWith('/')) {
    return url.slice(0, -1)
  } else {
    return url
  }
}

function localizeMany(
  sitemap: SiteMapUnlocalizedEntry[],
): MetadataRoute.Sitemap {
  return sitemap.flatMap(localize)
}
