import capitalize from '../modules/capitalize';

test('empty string', () => {
  expect(capitalize('')).toBe('');
});

test('captlized sentence show not changes', () => {
  expect(capitalize('This day is special.')).toBe('This day is special.');
});

test('mixed sentence', () => {
  expect(capitalize('the mAn saw the fox.')).toBe('The mAn saw the fox.');
})
