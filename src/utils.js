// General helpers (formatting, validation, etc.)

export function isValidNumber(value) {
  if (value === NaN || value === '' || value === null || value === undefined) {
    return false;
  };
  return true;
}

export function isValidUnit(value) {
  return typeof value === 'function';
}