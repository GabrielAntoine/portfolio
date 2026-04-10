import z from 'zod'

const envSchema = z.object({
  BASE_URL: z.url().transform((s) => new URL(s)),
})

export const env = envSchema.parse(process.env)
