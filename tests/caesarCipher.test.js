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

test('sentence with caps only', () => {
  expect(caesarCipher('FIREFOX IS GREAT', 3)).toBe('ILUHIRA LV JUHDW');
  expect(caesarCipher('FIREFOX IS GREAT', 7)).toBe('MPYLMVE PZ NYLHA');
  expect(caesarCipher('FIREFOX IS GREAT', 20)).toBe('ZCLYZIR CM ALYUN');
});

test('empty string test', () => {
  expect(caesarCipher('')).toBe('');
});

test('with numbers and punctuations', () => {
  expect(caesarCipher('wissman77', 9)).toBe('frbbvjw77');
  expect(caesarCipher('wissman77', 11)).toBe('htddxly77');
  expect(caesarCipher('How Are You?', 11)).toBe('Szh Lcp Jzf?');
  expect(caesarCipher(`I'm Wissman77`, 4)).toBe(`M'q Amwwqer77`);
});
