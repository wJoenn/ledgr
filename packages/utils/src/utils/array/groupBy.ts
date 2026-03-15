import type { FilteredAttrs } from '../../types/index.d.ts';

/**
 * Groups the collection by the given attribute.
 *
 * @param records An array of records.
 * @param attr An attribute of the given records.
 * @returns A map where the keys are the attribute's values and the values are arrays of records with matching value.
 *
 * @example
 * const records = [{ id: 1, foo: 'bar' }, { id: 2, foo: 'bar' }, { id: 3, foo: 'biz' }];
 * const grouped = groupBy(records, 'foo');
 *
 * console.log(grouped);
 * // Output: {
 * //   bar: [{ id: 1, foo: 'bar' }, { id: 2, foo: 'bar' }],
 * //   biz: [{ id: 3, foo: 'biz' }]
 * // }
 */
export const groupBy = <
  T extends Record<string, unknown>,
  A extends FilteredAttrs<T, number | string>,
>(records: T[], attr: A): Record<Extract<T[A], PropertyKey>, T[]> => (
  records.reduce((groups, currentRecord) => {
    const key = currentRecord[attr] as Extract<T[A], PropertyKey>;
    groups[key] ||= [];
    groups[key].push(currentRecord);

    return groups;
  }, {} as Record<Extract<T[A], PropertyKey>, T[]>)
);
