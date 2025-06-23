// Main JS: Initialization, loader, event listeners
import { setupEventListeners } from './dom.js';
import '../public/style.css';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Page fully loaded and parsed!');
  setupEventListeners();
});