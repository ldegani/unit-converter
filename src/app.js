// Main JS: Initialization, loader, event listeners
import { populateConversionDropdown, setupEventListeners } from './dom.js';
import '../public/style.css';

document.addEventListener('DOMContentLoaded', () => {
  populateConversionDropdown();
  setupEventListeners();
});