import { pluck } from '~/utils';

describe('pluck', () => {
  it('returns an array composed of each records\' selected attribute', () => {
    const records = [
      { id: 1, label: 'foo' },
      { id: 2, label: 'bar' },
      { id: 3, label: 'biz' },
    ];

    const result = pluck(records, 'label');
    expect(result).toStrictEqual(['foo', 'bar', 'biz']);
  });
});
