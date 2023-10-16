import capitalize from '../modules/capitalize';

test('empty string', () => {
  expect(capitalize('')).toBe('');
});

test('captlized sentence show not changes', () => {
  expect(capitalize('This day is special.')).toBe('This day is special.');
});
