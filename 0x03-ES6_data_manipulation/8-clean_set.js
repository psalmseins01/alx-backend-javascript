const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((st) => {
    if (typeof st === 'string' && st.startsWith(startString)) {
      strings.push(st.slice(startString.length));
    }
  });
  return strings.join('-');
};

export default cleanSet;
