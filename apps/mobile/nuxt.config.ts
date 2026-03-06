import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,

  components: [{ path: '~/components', pathPrefix: false }],

  imports: {
    dirs: ['utils/**'],
  },

  typescript: {
    tsConfig: {
      include: ['../*.config.ts'],
    },
  },

  vite: {
    plugins: [
      // @ts-expect-error viteVersion missing.
      svgLoader(),
    ],
  },

  modules: [
    '@nuxtjs/tailwindcss',

    [
      '@nuxt/eslint',
      {
        config: {
          standalone: false,
        },
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        defaultLocale: 'en',
        locales: [{ code: 'en', file: 'en.ts' }],
        restructureDir: 'app/assets',
        strategy: 'prefix',
      },
    ],
  ],
});
