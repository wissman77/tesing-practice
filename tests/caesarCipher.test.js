import caesarCipher from '../modules/caesarCipher';

test('sentence with letters only', () => {
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
  expect(caesarCipher('defend the east wall of the castle', 10)).toBe(
    'nopoxn dro okcd gkvv yp dro mkcdvo'
  );
  expect(caesarCipher('defend the east wall of the castle', 13)).toBe(
    'qrsraq gur rnfg jnyy bs gur pnfgyr'
  );
});
