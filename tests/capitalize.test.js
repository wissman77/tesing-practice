import capitalize from '../modules/capitalize';

test('empty string', () => {
  expect(capitalize('')).toBe('');
});

test('captlized sentence show not changes', () => {
  expect(capitalize('This day is special.')).toBe('This day is special.');
});

test('mixed sentence', () => {
  expect(capitalize('the mAn saw the fox.')).toBe('The mAn saw the fox.');
});

test('All caps letter should return as is', () => {
  expect(capitalize('THAT IS AN IMPORTANT CASE!')).toBe(
    'THAT IS AN IMPORTANT CASE!'
  );
});

test('All small letters shoud capitalize first leter', () => {
  expect(capitalize('what is the matter?')).toBe('What is the matter?');
});
