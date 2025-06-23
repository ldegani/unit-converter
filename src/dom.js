//All DOM selectors, rendering functions

import { conversions } from './converter.js';
import { units } from './units.js';
import * as utils from './utils'

export function setupEventListeners() {
  const btnConvert = document.querySelector('#btn-convert');
  btnConvert.addEventListener('click', handleConversion);
}

function handleConversion(e) {
  e.preventDefault();

  // const inputValue = parseFloat(document.querySelector('#unit-input').value);
  const inputRawValue = document.querySelector('#unit-input').value;
  const conversionType = document.querySelector('#conversion-type').value;

  const convertFunction = conversions[conversionType];

  if (!utils.isValidUnit(convertFunction)) {
    renderError('Invalid conversion selected')
    return;
  }

  if (!utils.isValidNumber(inputRawValue)) {
    console.log(false);
    renderError('Enter a valid number');
    return;
  };

  const inputValue = parseFloat(inputRawValue);
  const result = convertFunction(inputValue);
  const unit = units[conversionType];
  
  renderResult(result, unit);
}

function renderError(message) {
  const resultContainer = document.querySelector('#result');
  resultContainer.textContent = message;
}

function renderResult(value, unit) {
  const resultContainer = document.querySelector('#result');
  resultContainer.textContent = `${value.toFixed(2)} ${unit}`;
}