const calculator = {
  isValide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return false;
    return true;
  },
  add(a, b) {
    if (!this.isValide(a, b)) {
      return 'elements must be numbers';
    }
    return a + b;
  },
  subtract(a, b) {
    if (!this.isValide(a, b)) {
      return 'elements must be numbers';
    }
    return a - b;
  },
  divide(a, b) {
    if (!this.isValide(a, b)) {
      return 'elements must be numbers';
    }
    if (b === 0) {
      return 'can not divide by zero';
    }
    return a / b;
  },
  multiply(a, b) {
    if (!this.isValide(a, b)) {
      return 'elements must be numbers';
    }
    return a * b;
  },
};

export default calculator;
