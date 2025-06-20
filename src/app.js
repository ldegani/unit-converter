// Main JS: Initialization, loader, event listeners
import { setupEventListeners } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Page fully loaded and parsed!');
  setupEventListeners();
});