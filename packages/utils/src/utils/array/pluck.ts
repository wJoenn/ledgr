/**
 * Extract the given attribute from each element in the array.
 *
 * @param records An array of records.
 * @param attr An attribute of the given records.
 * @returns An array of records mapped to the given attribute.
 *
 * @example
 * const records = [{ foo: 1 }, { foo: 2 }];
 * const foos = pluck(records, 'foo');
 *
 * console.log(foos); // Output: [1, 2]
 */
export const pluck = <T extends Record<string, unknown>, K extends keyof T>(records: T[], attr: K): T[K][] => (
  records.map(record => record[attr])
);
