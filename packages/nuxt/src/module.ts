import type {} from '@nuxt/schema';

import { addImportsSources, defineNuxtModule } from '@nuxt/kit';

export type ModuleOptions = Record<string, never>;

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@ledgr/nuxt',
  },
  setup () {
    // Remove alias after https://github.com/nuxt/nuxt/pull/34582
    addImportsSources({ package: '@ledgr/utils' } as unknown as Parameters<typeof addImportsSources>[0]);
  },
});
