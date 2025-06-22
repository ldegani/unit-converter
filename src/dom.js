//All DOM selectors, rendering functions

import { convertKgToLbs } from './converter.js';

export function setupEventListeners() {
  const btnConvert = document.querySelector('#btn-convert');
  btnConvert.addEventListener('click', () => {
    console.log('button')
  });
}

function handleConversion(e) {
  e.preventDefault();

  const input = document.querySelector('#kg-input').value;
  const result = convertKgToLbs(parseFloat(input));

  renderResult(result);
}

function renderResult(value) {
  const resultContainer = document.querySelector('#result');
  resultContainer.textContent = `Result: ${value.toFixed(2)} lbs)`;
}