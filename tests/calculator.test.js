import calculator from '../modules/calculator';

test('add function test', () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.add(0.2, 0.1)).toBeCloseTo(0.3);
  expect(calculator.add(1, 3)).toBeGreaterThan(3);
  expect(calculator.add(1, 'three')).not.toBe(4);
  expect(calculator.add(1, 'three')).toBe('elements must be numbers');
});

test('subtract function test', () => {
  expect(calculator.subtract(3, 4)).toEqual(-1);
  expect(calculator.subtract(10, 3)).toBe(7);
  expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
  expect(calculator.subtract('three', 'one')).toBe('elements must be numbers');
});

test('divide function test', () => {
  expect(calculator.divide(9, 3)).toEqual(3);
  expect(calculator.divide(15, 5)).toBe(3);
  expect(calculator.divide(0.41, 0.2)).toBeCloseTo(2.05);
  expect(calculator.divide('three', 'one')).toMatch('elements must be numbers');
  expect(calculator.divide(3, 0)).toMatch(/divide by zero/);
});
