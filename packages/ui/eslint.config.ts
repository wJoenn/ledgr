import type { Linter } from 'eslint';

import vue from '@leexi/shared/eslint/vue';

export default <Linter.Config[]>[
  ...vue,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
