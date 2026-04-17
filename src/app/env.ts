import z from 'zod'

const envSchema = z.object({
  BASE_URL: z.url().transform((s) => new URL(s)),
  RESEND_API_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
