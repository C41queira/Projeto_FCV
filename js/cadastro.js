document.getElementById('forms_cadastro').addEventListener('submit', function (params) {
    params.preventDefault(); 

    var nome = document.getElementById('campo_nome').value;
    var email = document.getElementById('campo_email').value;
    var cpf = document.getElementById('campo_cpf').value;
    var senha = document.getElementById('campo_senha').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/users/cadastro', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        name: nome,
        email: email,
        document: cpf,
        password: senha
    }));

    window.location.href = "login.html"
})