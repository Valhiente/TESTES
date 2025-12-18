/**
 * js/modules/accordion.js
 * Funcionalidade do Acordeão (FAQ)
 */
export function setupAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            
            // Fecha outros abertos
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('open');
                }
            });

            // Toggle atual (abre/fecha o clicado)
            header.classList.toggle('active');
            content.classList.toggle('open');
        });
    });
}