/**
 * modules/script.js
 * Inicializador global dos módulos FORBODY
 * Seguro, modular e compatível com GitHub Pages
 */

import { setupMenuToggle } from './menuToggle.js';
import { setupFormSubmission } from './formSubmission.js';
import { setupAccordion } from './accordion.js';
import { setupHeaderScroll } from './headerScroll.js';

document.addEventListener('DOMContentLoaded', () => {

    try {
        setupMenuToggle();
    } catch (e) {
        console.warn('MenuToggle não inicializado:', e.message);
    }

    try {
        setupHeaderScroll();
    } catch (e) {
        console.warn('HeaderScroll não inicializado:', e.message);
    }

    try {
        setupAccordion();
    } catch (e) {
        console.warn('Accordion não inicializado:', e.message);
    }

    try {
        setupFormSubmission();
    } catch (e) {
        console.warn('FormSubmission não inicializado:', e.message);
    }

    console.log('FORBODY | JS carregado com sucesso 🚀');
});
