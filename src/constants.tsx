export const contactFormConstraints = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  subject: { min: 3, max: 254 },
  message: { min: 10, max: 2000 },
}
