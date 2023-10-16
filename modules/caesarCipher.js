function isCapLetter(letter) {
  return /[A_Z]/.test(letter);
}

function isSmallLetter(letter) {
  return /[a-z]/.test(letter);
}

function caesarCipher(str, shift) {
  if (!str.length) return '';

  const a = 'a'.charCodeAt(0); // 97 ascii code
  const A = 'A'.charCodeAt(0); // 65 ascii code

  const ciphred = [...str].map((letter) => {
    if (isCapLetter(letter)) {
      return String.fromCharCode(A + ((letter.charCodeAt(0) - A + shift) % 26));
    } else if (isSmallLetter(letter)) {
      return String.fromCharCode(a + ((letter.charCodeAt(0) - a + shift) % 26));
    }
    return letter;
  });

  return ciphred.join('');
}

export default caesarCipher;
