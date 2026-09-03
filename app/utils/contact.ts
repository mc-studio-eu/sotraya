/**
 * Single source of truth for every outbound link (social, contact, booking).
 * Values mirror what sotraya.com publishes today; change them here, not in
 * the components.
 */
export const CONTACT = {
  location: 'Lyon, France',
  /** Booking: the 30-minute intro call. */
  calendly: 'https://calendly.com/sotraya-contact/30min',
  /** E.164 without the +, as wa.me expects it. */
  phone: '+33685879154',
  phoneDisplay: '+33 6 85 87 91 54',
  whatsapp:
    'https://wa.me/33685879154?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20SOTRAYA.',
  email: 'hello@sotraya.com',
  instagram: 'https://instagram.com/daris_sotraya',
  instagramHandle: '@daris_sotraya'
} as const

export const telHref = `tel:${CONTACT.phone}`
export const mailHref = `mailto:${CONTACT.email}`
