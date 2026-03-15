import type { Linter } from 'eslint';

import base from '@leexi/shared/eslint/base';

export default <Linter.Config[]>[
  ...base,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: [
      '.turbo',
      'dist',
      'node_modules/',
    ],
  },
];
