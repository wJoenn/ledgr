import { sum } from '~/utils';

describe('sum', () => {
  it('returns the sum of an array of numbers', () => {
    const result = sum([1, 2, 3]);
    expect(result).toBe(6);
  });

  it('returns 0 when given an empty array', () => {
    const result = sum([]);
    expect(result).toBe(0);
  });
});
