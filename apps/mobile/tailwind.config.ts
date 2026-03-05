import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default <Partial<Config>>{
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('default', 'html :where(&)');
    }),
  ],
};
