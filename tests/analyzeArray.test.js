import analyzeArray from '../modules/analyzeArray';

test('empty array test', () => {
  expect(analyzeArray([])).toMatchObject({});
});

test('array with 6 elements', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
