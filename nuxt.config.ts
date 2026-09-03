import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
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
      title: 'Sotraya — Systems for better business.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Sotraya conçoit les systèmes qui connectent vos outils, automatisent vos opérations et éliminent le travail répétitif.'
        },
        { name: 'theme-color', content: '#11110F' }
      ],
      link: [
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
