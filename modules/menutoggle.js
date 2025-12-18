/**
 * menuToggle.js
 * Menu hambúrguer mobile - acessível, seguro e robusto
 */

export function setupMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (!menuToggle || !mainNav) return;

    const navLinks = mainNav.querySelectorAll('a');
    const OPEN_ICON = '✕';
    const CLOSE_ICON = '☰';

    // Estado inicial
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerText = CLOSE_ICON;

    function openMenu() {
        mainNav.classList.add('active');
        menuToggle.innerText = OPEN_ICON;
        menuToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        mainNav.classList.remove('active');
        menuToggle.innerText = CLOSE_ICON;
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    function toggleMenu() {
        mainNav.classList.contains('active') ? closeMenu() : openMenu();
    }

    // Clique no botão
    menuToggle.addEventListener('click', toggleMenu);

    // Fecha ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fecha ao clicar fora do menu
    document.addEventListener('click', (event) => {
        if (
            mainNav.classList.contains('active') &&
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Fecha com ESC (acessibilidade premium)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}
