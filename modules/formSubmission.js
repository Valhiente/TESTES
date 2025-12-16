/**
 * modules/formSubmission.js
 * Envio e Validação do Formulário (Contato e Franquia)
 */

// Ajustado para importar da mesma pasta 'modules'
import { validateName, validateEmail } from './validators.js';

export function setupFormSubmission() {
    const forms = document.querySelectorAll('form'); 

    forms.forEach(form => {
        const formMessage = form.querySelector('#form-message');

        if (!formMessage) return; // Garante que só tente submeter forms com área de mensagem

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Reset de mensagens
            formMessage.classList.add('hidden');
            formMessage.classList.remove('success', 'error');

            const nameInput = form.querySelector('input[name="Nome"]');
            const emailInput = form.querySelector('input[name="Email"]');
            
            // FUNÇÃO AUXILIAR DE MENSAGEM
            function displayMessage(message, type) {
                formMessage.classList.remove('hidden', 'success', 'error');
                formMessage.classList.add(type);
                formMessage.innerHTML = message;
                
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                    formMessage.innerHTML = '';
                }, 7000);
            }
            
            // Validação de Nome
            if (nameInput && !validateName(nameInput.value)) {
                displayMessage('Por favor, digite seu nome completo ou pelo menos seu primeiro nome.', 'error');
                return;
            }

            // Validação de Email
            if (emailInput && !validateEmail(emailInput.value)) {
                displayMessage('Por favor, digite um e-mail válido.', 'error');
                return;
            }

            // Envio para o Formspree
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    displayMessage('Mensagem enviada com sucesso! Em breve entraremos em contato.', 'success');
                    form.reset(); // Limpa o formulário
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        displayMessage('Erro nos dados. Verifique e tente novamente.', 'error');
                    } else {
                        throw new Error('Erro desconhecido.');
                    }
                }
            } catch (error) {
                displayMessage('Erro de conexão. Tente novamente.', 'error');
                console.error(error);
            }
        });
    });
}