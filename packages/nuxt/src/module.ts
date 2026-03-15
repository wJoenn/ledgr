import type { ModuleDependencyMeta } from '@nuxt/schema';
import type { ModuleOptions as TailwindModuleOptions } from '@nuxtjs/tailwindcss';

import { addImportsSources, defineNuxtModule } from '@nuxt/kit';

export type ModuleOptions = Record<string, never>;

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@ledgr/nuxt',
  },
  moduleDependencies: {
    '@nuxtjs/tailwindcss': <ModuleDependencyMeta<TailwindModuleOptions>>{
      version: '^6.0.0',
      defaults: {
        configPath: '@ledgr/tailwind-config',
      },
    },
  },
  setup () {
    // Remove alias after https://github.com/nuxt/nuxt/pull/34582
    addImportsSources({ package: '@ledgr/utils' } as unknown as Parameters<typeof addImportsSources>[0]);
  },
});
