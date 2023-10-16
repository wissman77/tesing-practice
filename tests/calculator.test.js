import calculator from '../modules/calculator';

test('add function test', () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.add(0.2, 0.1)).toBeCloseTo(0.3);
  expect(calculator.add(1, 3)).toBeGreaterThan(3);
});
