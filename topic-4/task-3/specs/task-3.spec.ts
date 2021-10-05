const { getSpeedy, getLazy } = require('../index');

getSpeedy().eat("apple");

test('Method works fine', () => {
    expect(getLazy().stomach).toBe([]);
});
