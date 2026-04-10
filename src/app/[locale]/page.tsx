import { Hero } from '@/components/portfolio/hero/hero'
import { getPathname } from '@/i18n/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(
  { params }: PageProps<'/[locale]'>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { locale } = await params
  const { openGraph, twitter } = await parent

  const t = await getTranslations({ namespace: 'Metadata./', locale })
  const title = t('title')
  const canonical = getPathname({ locale, href: '/' })

  return {
    title,
    alternates: {
      canonical,
    },
    openGraph: {
      ...openGraph,
      url: canonical,
      title,
    },
    twitter: {
      ...twitter,
      title,
    },
  }
}

export default async function Home() {
  return (
    <div>
      <Hero />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
      consequatur, quo perspiciatis saepe ipsam modi unde nesciunt sunt dicta
      quia molestias, iste minus asperiores nobis? Necessitatibus cum tenetur
      ducimus ex soluta adipisci at? Ea culpa rerum, vel ratione repellendus
      voluptatum illum magni, explicabo veniam, temporibus quaerat et numquam?
      Eum sint ducimus beatae similique! Perspiciatis magnam itaque a voluptatum
      quia dolorum omnis accusamus illum porro quod numquam ducimus ipsa,
      excepturi perferendis ab autem! Ipsum perferendis voluptatem, libero amet
      assumenda quis dolorum error eligendi. Pariatur accusamus obcaecati
      asperiores maxime a aperiam fugiat est, illum voluptates vitae
      necessitatibus odit accusantium autem delectus perspiciatis iusto? Sed
      quas corrupti libero quam praesentium ipsum cum, ipsa nihil odio! Dolore,
      laudantium repellendus quibusdam aliquid iure animi numquam et id repellat
      quas voluptatum delectus veritatis veniam porro ipsa. Veritatis debitis
      maiores ipsum aut nihil, amet velit ut ipsa labore aliquid dolorem
      deserunt officiis hic laudantium alias ullam! Quos repudiandae dolorum
      neque rerum praesentium, error corrupti, quod officia minima culpa
      mollitia distinctio est placeat quidem sint voluptatum nulla, ea iure
      tempora perspiciatis quisquam asperiores voluptate laudantium
      consequuntur. Provident recusandae dolore nostrum dolorem temporibus
      dolorum quis? Ipsam ipsum libero optio atque at provident dignissimos
      enim? Nulla voluptatibus dignissimos neque rem?
    </div>
  )
}
