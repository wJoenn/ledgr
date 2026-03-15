import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default <Omit<Config, 'content'>>{
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('default', 'html :where(&)');
    }),
  ],
  theme: {
    extend: {
      colors: {
        accent: '#a286da',
        main: '#35d492',
      },
    },
  },
};
