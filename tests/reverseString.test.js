import reverseString from '../modules/reveseString';

test('empty etring', () => {
  expect(reverseString()).toBe('');
});

test('palindrome string test', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('word test', () => {
  expect(reverseString('wissman')).toBe('namssiw');
  expect(reverseString('wissman')).not.toBe('wissman');
});


