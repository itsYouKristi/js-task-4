const { getHead, getTable, getBed, getPockets } = require('../index');

test('Method works fine', () => {
    expect(getPockets().pen).toEqual(3),
    expect(getBed().glasses).toEqual(1),
    expect(getTable().money).toEqual(undefined);
});
