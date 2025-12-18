/**
 * js/modules/headerScroll.js
 * Funcionalidade do Header (Sticky/Scrolled)
 */
export function setupHeaderScroll() {
    const siteHeader = document.querySelector('.site-header');

    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adiciona a classe após rolar 50px
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }
}