const { add } = require('../index.js');

describe('test index', () => {
  test('add', () => {
    expect(add(1, 5)).toBe(6);
    console.log('hola');
  });
});
