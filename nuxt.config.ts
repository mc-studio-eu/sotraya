import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Sotraya | Systems for better business.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Sotraya conçoit les systèmes qui connectent vos outils, automatisent vos opérations et éliminent le travail répétitif.'
        },
        { name: 'theme-color', content: '#11110F' },

        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Sotraya' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:title', content: 'Sotraya | Systems for better business.' },
        {
          property: 'og:description',
          content:
            'Sotraya conçoit les systèmes qui connectent vos outils, automatisent vos opérations et éliminent le travail répétitif.'
        },
        { property: 'og:url', content: 'https://sotraya.com/' },
        { property: 'og:image', content: 'https://sotraya.com/apple-touch-icon.png' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },

        { rel: 'preconnect', href: 'https://api.fontshare.com' },
        { rel: 'preconnect', href: 'https://cdn.fontshare.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&f[]=clash-display@500,600,700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap'
        }
      ]
    }
  }
})
