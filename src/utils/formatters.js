export const formatMM = (value = 0) => `${value} mm`;

export const average = (arr = []) =>
  arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

export const sum = (arr = []) =>
  arr.reduce((a, b) => a + b, 0);

export const capitalize = (s = "") =>
  s.charAt(0).toUpperCase() + s.slice(1);
