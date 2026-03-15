/**
 * Returns the sum of elements.
 *
 * @param numbers An array of number.
 * @returns The sum of numbers.
 *
 * @example
 * const sum = sum([1, 2, 3])
 *
 * console.log(sum); // Output: 6
 */
export const sum = (numbers: number[]): number => numbers.reduce((a, b) => a + b, 0);
