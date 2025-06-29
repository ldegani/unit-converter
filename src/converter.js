//Conversion logic (modules, pure functions)

// --- KG conversions ---
export function convertKgToG(kg) {
  return kg * 1000;
}

export function convertKgToMg(kg) {
  return kg * 1_000_000;
}

export function convertKgToLb(kg) {
  return kg * 2.20462;
}

export function convertKgToTon(kg) {
  return kg / 1000;
}

// --- G conversions ---
export function convertGToKg(g) {
  return g / 1000;
}

export function convertGToMg(g) {
  return g * 1000;
}

export function convertGToOz(g) {
  return g / 28.3495;
}

export function convertGToLb(g) {
  return g / 453.592;
}

// --- MG conversions ---
export function convertMgToG(mg) {
  return mg / 1000;
}

export function convertMgToKg(mg) {
  return mg / 1_000_000;
}

// --- LB conversions ---
export function convertLbToKg(lb) {
  return lb / 2.20462;
}

export function convertLbToG(lb) {
  return lb * 453.592;
}

export function convertLbToOz(lb) {
  return lb * 16;
}

// --- OZ conversions ---
export function convertOzToG(oz) {
  return oz * 28.3495;
}

export function convertOzToLb(oz) {
  return oz / 16;
}

// --- TON conversions ---
export function convertTonToKg(ton) {
  return ton * 1000;
}

export const conversions = {
  kgToG: convertKgToG,
  kgToMg: convertKgToMg,
  kgToLb: convertKgToLb,
  kgToTon: convertKgToTon,

  gToKg: convertGToKg,
  gToMg: convertGToMg,
  gToOz: convertGToOz,
  gToLb: convertGToLb,

  mgToG: convertMgToG,
  mgToKg: convertMgToKg,

  lbToKg: convertLbToKg,
  lbToG: convertLbToG,
  lbToOz: convertLbToOz,

  ozToG: convertOzToG,
  ozToLb: convertOzToLb,

  tonToKg: convertTonToKg,
}