// General helpers (formatting, validation, etc.)

export function isValidNumber(value) {
  return !isNaN(value) && isFinite(value);
}