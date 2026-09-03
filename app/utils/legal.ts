/**
 * Informations légales de l'éditeur du site, source unique pour les pages
 * « Mentions légales » et « Conditions générales de vente ».
 *
 * ⚠️  À COMPLÉTER avant mise en ligne : tous les champs à `null` sont affichés
 * comme « à compléter » sur le site. Ce sont des mentions obligatoires
 * (art. 6 III LCEN, art. R.123-237 code de commerce).
 */
export const LEGAL = {
  /** Date de dernière révision des documents juridiques. */
  updatedAt: '3 septembre 2026',

  siteUrl: 'https://sotraya.com',

  company: {
    name: 'Sotraya',
    /** Ex. « SASU », « SAS », « Entrepreneur individuel ». */
    legalForm: null as string | null,
    /** Capital social en euros, ex. « 1 000 € ». Laisser `null` si EI. */
    capital: null as string | null,
    /** Adresse complète du siège social. */
    address: null as string | null,
    city: 'Lyon, France',
    /** SIREN à 9 chiffres. */
    siren: null as string | null,
    /** Ville du greffe, ex. « RCS Lyon ». */
    rcs: null as string | null,
    /** N° de TVA intracommunautaire, ou `null` si franchise en base. */
    vat: null as string | null,
    /** Mention à afficher si la TVA n'est pas applicable. */
    vatExemptNotice: 'TVA non applicable, art. 293 B du CGI',
    /** Nom du directeur de la publication. */
    publisher: null as string | null
  },

  host: {
    name: null as string | null,
    /** Raison sociale + adresse de l'hébergeur. */
    address: null as string | null,
    url: null as string | null
  },

  /** Conditions commerciales appliquées par défaut aux prestations. */
  terms: {
    /** Acompte à la commande, en pourcentage. */
    depositRate: 40,
    /** Délai de paiement des factures, en jours à compter de l'émission. */
    paymentDays: 30,
    /** Durée de validité d'un devis, en jours. */
    quoteValidityDays: 30,
    /** Indemnité forfaitaire de recouvrement (art. L.441-10 code de commerce). */
    recoveryFee: '40 €',
    /** Durée de la garantie de conformité des livrables, en jours. */
    warrantyDays: 30
  },

  /** Médiateur de la consommation, requis uniquement si clientèle B2C. */
  mediator: {
    name: null as string | null,
    url: null as string | null
  }
} as const
