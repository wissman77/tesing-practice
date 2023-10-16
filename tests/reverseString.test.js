import reverseString from '../modules/reveseString';

test('empty etring', () => {
  expect(reverseString()).toBe('');
});

test('palindrome string test', () => {
  expect(reverseString('racecar')).toBe('racecar');
});
