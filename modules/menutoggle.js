/**
 * js/modules/menuToggle.js
 * Funcionalidade do Menu Hambúrguer (Mobile)
 */
export function setupMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        // Evento de click no ícone do hambúrguer/X
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Troca o ícone (☰ / ✕)
            if (mainNav.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; 
            } else {
                menuToggle.innerHTML = '☰'; 
            }
        });
    }

    // Fechar o menu ao clicar em um link (Melhoria de UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    });
}