const { add } = require('../index.js');

describe('test index', () => {
  test('add', () => {
    expect(add(1, 4)).toBe(5);
    console.log('hola');
  });
});
