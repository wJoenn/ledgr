import type { FilteredAttrs } from '../../types';
import { pluck, sum } from '../../utils';

/**
 * Returns the sum of elements at a given attribute.
 *
 * @param records An array of records.
 * @param attr An attribute of the given records.
 * @returns The sum of numbers.
 *
 * @example
 * const records = [{ foo: 1 }, { foo: 2 }];
 * const sum = sumBy(records, 'foo');
 *
 * console.log(sum); // Output: 3
 */
export const sumBy = <T extends Record<string, unknown>>(records: T[], attr: FilteredAttrs<T, number>): number => (
  sum(pluck(records, attr) as number[])
);
