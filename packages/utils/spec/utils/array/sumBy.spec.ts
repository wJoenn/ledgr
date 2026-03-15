import { sumBy } from '~/utils';

describe('sumBy', () => {
  it('returns the sum of each records\' given numeric attribute', () => {
    const records = [
      { id: 1, amount: 10 },
      { id: 2, amount: 15 },
      { id: 3, amount: 5 },
    ];

    const result = sumBy(records, 'amount');
    expect(result).toBe(30);
  });
});
