import calculator from '../modules/calculator';

test('add function test', () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.add(0.2, 0.1)).toBeCloseTo(0.3);
  expect(calculator.add(1, 3)).toBeGreaterThan(3);
});

test('subtract function test', () => {
  expect(calculator.subtract(3, 4)).toEqual(-1);
  expect(calculator.subtract(10, 3)).toBe(7);
  expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
});
