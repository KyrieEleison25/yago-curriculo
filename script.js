// script.js

// Função para exibir uma mensagem de boas-vindas
function mostrarBoasVindas() {
    const boasVindas = document.getElementById('boasVindas');
    boasVindas.textContent = "Bem-vindo ao meu portfólio!";
}

// Adiciona um listener para o evento de carregamento da página
window.addEventListener('load', mostrarBoasVindas);

// Função para manipular o envio do formulário de contato
function enviarFormulario(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você pode implementar a lógica para enviar os dados para um servidor ou API

    // Exibe uma mensagem de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    document.getElementById('contatoForm').reset(); // Reseta o formulário
}

// Adiciona um listener para o envio do formulário
const contatoForm = document.getElementById('contatoForm');
if (contatoForm) {
    contatoForm.addEventListener('submit', enviarFormulario);
}
