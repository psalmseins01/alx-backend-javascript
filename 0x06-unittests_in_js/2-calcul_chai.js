function calculateNumber(type, a, b) {
  const m1 = Math.round(a);
  const m2 = Math.round(b);

  if (type === 'SUBTRACT') {
    return m1 - m2;
  }

  if (type === 'DIVIDE') {
    if (n2 === 0) {
      return 'Error';
    }
    return m1 / m2;
  }

  return m1 + m2;
}

module.exports = calculateNumber;
