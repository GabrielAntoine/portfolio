'use client'

import { motion } from 'motion/react'
import { ComponentProps } from 'react'

export function Reveal(props: ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0, margin: '0px 0px -80px 0px' }}
      {...props}
    />
  )
}
