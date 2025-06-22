//All DOM selectors, rendering functions

import { conversions } from './converter.js';
import { units } from './units.js';

export function setupEventListeners() {
  const btnConvert = document.querySelector('#btn-convert');
  btnConvert.addEventListener('click', handleConversion);
}

function handleConversion(e) {
  e.preventDefault();

  const inputValue = parseFloat(document.querySelector('#unit-input').value);
  const conversionType = document.querySelector('#conversion-type').value;

  const convertFunction = conversions[conversionType];
  const result = convertFunction(inputValue);
  const unit = units[conversionType];

  renderResult(result, unit);
}

function renderResult(value, unit) {
  const resultContainer = document.querySelector('#result');
  resultContainer.textContent = `${value.toFixed(2)} ${unit}`;
}