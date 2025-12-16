/**
 * js/utils/validators.js
 * Funções de Validação de Dados
 */

export function validateName(name) {
    // Exige que o nome não seja vazio e tenha mais de 1 caractere.
    const trimmedName = name.trim();
    return trimmedName.length > 1; 
}

export function validateEmail(email) {
    // Regex de validação de e-mail simples
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}