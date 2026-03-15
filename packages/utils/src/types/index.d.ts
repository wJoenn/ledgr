export type FilteredAttrs<T, F extends Primitive> = {
  [K in keyof T]: T[K] extends F ? K : never
}[keyof T];

export type Primitive = boolean | null | number | string | undefined;
