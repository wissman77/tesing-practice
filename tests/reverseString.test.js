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

test('sentence test', () => {
  expect(reverseString('the odin project is awsome.')).toBe(
    '.emoswa si tcejorp nido eht'
  );
});

test('mixed letters sentence test', () => {
  expect(reverseString('My Profile WaS HaCkEd.')).toBe(
    '.dEkCaH SaW eliforP yM'
  );
});
