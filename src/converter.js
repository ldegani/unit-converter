//Conversion logic (modules, pure functions)

export function convertKgToLbs(kg) {
  return kg * 2.20462;
}

export function convertKgToG(kg) {
  return kg * 100;
}

export const conversions = {
  'kg-to-lbs': convertKgToLbs,
  'kg-to-g': convertKgToG,
}