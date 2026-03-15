import { groupBy } from '~/utils';

describe('groupBy', () => {
  it('groups records by a string attribute', () => {
    const records = [
      { id: 1, type: 'foo' },
      { id: 2, type: 'bar' },
      { id: 3, type: 'foo' },
    ];

    const result = groupBy(records, 'type');
    expect(result).toStrictEqual({
      foo: [
        { id: 1, type: 'foo' },
        { id: 3, type: 'foo' },
      ],
      bar: [{ id: 2, type: 'bar' }],
    });
  });

  it('groups records by a number attribute', () => {
    const records = [
      { id: 1, type: 1 },
      { id: 2, type: 1 },
      { id: 3, type: 2 },
    ];

    const result = groupBy(records, 'type');
    expect(result).toStrictEqual({
      1: [
        { id: 1, type: 1 },
        { id: 2, type: 1 },
      ],
      2: [{ id: 3, type: 2 }],
    });
  });
});
