/**
 * modules/script.js
 * Importa e Inicializa todos os módulos que estão na mesma pasta.
 */
import { setupMenuToggle } from './menutoggle.js'; // Ajustado nome e caminho
import { setupFormSubmission } from './formSubmission.js';
import { setupAccordion } from './accordion.js';
import { setupHeaderScroll } from './headerScroll.js';

document.addEventListener('DOMContentLoaded', function() {
    setupMenuToggle();
    setupFormSubmission();
    setupAccordion();
    setupHeaderScroll();
    
    console.log("ForBody JS inicializado. Módulos carregados com sucesso.");
});