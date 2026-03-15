import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      {
        resolve: {
          alias: {
            '~': './src',
          },
        },
        test: {
          globals: true,
        },
      },
    ],
    reporters: 'tree',
  },
});
