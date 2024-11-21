// Validação do campo "Nome"
document.getElementById('nome').addEventListener('input', function () {
    const entradaNome = this.value.trim();
    const erroNome = document.getElementById('erroNome');
    const partesNome = entradaNome.split(/\s+/);

    if (partesNome.length >= 2 && partesNome.every(parte => parte.length > 0)) {
        erroNome.style.display = 'none';
        this.setCustomValidity('');
    } else {
        erroNome.style.display = 'block';
        this.setCustomValidity('Por favor, preencha com seu nome completo.');
    }
});

// Validação do campo "E-mail"
document.getElementById('email').addEventListener('input', function () {
    const entradaEmail = this.value.trim();
    const erroEmail = document.getElementById('erroEmail');
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (padraoEmail.test(entradaEmail)) {
        erroEmail.style.display = 'none';
        this.setCustomValidity('');
    } else {
        erroEmail.style.display = 'block';
        this.setCustomValidity('Por favor, insira um e-mail válido.');
    }
});

// Validação do campo "Mensagem"
document.getElementById('mensagem').addEventListener('input', function () {
    const entradaMensagem = this.value.trim();
    const erroMensagem = document.getElementById('erroMensagem');
    const contagemCaracteres = entradaMensagem.length;

    if (contagemCaracteres >= 30 && contagemCaracteres <= 500) {
        erroMensagem.style.display = 'none';
        this.setCustomValidity('');
    } else {
        erroMensagem.style.display = 'block';
        this.setCustomValidity('A mensagem deve ter entre 30 e 500 caracteres.');
    }
});

// Validação do campo "Telefone"
document.getElementById('telefone').addEventListener('input', function () {
    const entradaTelefone = this.value.trim();
    const erroTelefone = document.getElementById('erroTelefone');
    const padraoTelefone = /^\d{2}\d{5}-\d{4}$/;

    if (padraoTelefone.test(entradaTelefone)) {
        erroTelefone.style.display = 'none';
        this.setCustomValidity('');
    } else {
        erroTelefone.style.display = 'block';
        this.setCustomValidity('Por favor, insira um número de telefone válido no formato: XX XXXXX-XXXX.');
    }
});

// Prevenir envio do formulário com campos inválidos
document.getElementById('formularioContato').addEventListener('submit', function (event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
});
