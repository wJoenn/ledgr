/* eslint-disable @typescript-eslint/no-empty-object-type */
import type en from '~/assets/locales/en';

declare module 'vue-i18n' {
  /** Schema of available messages found in `~/assets/locales/en` */
  type MessageSchema = ReturnType<typeof en>;

  // Overrides `vue-i18n` `DefineLocaleMessage` to extend the given `MessageSchema`.
  // This enables intellisense of available paths for i18n methods such as `$t`.
  export interface DefineLocaleMessage extends MessageSchema {}
}
