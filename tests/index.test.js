const index = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(index.sum(1, 2)).toBe(3);
});

test('mult 2 * 3 to equal 6', () => {
  expect(index.mult(2, 3)).toBe(6);
});

test('substr 2 - 1 to equal 1', () => {
  expect(index.substr(2, 1)).toBe(1);
});

test('split 2 / 2 to equal 1', () => {
  expect(index.split(2, 2)).toBe(1);
});

test('seconds spent from 2000', () => {
  expect(index.centuryTime(new Date(), new Date('1/1/2000'))).toBeGreaterThan(60*60*24*365*19);
});
