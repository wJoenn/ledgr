import vue from '@leexi/shared/eslint/vue';
import { createResolver } from 'nuxt/kit';
import withNuxt from './.nuxt/eslint.config.mjs';

const resolver = createResolver(import.meta.url);

export default withNuxt([
  ...vue,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: resolver.resolve('.'),
      },
    },
  },
]);
