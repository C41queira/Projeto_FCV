import { nameClient, emailClient, telefoneClient } from "./elementosCliente.js";

document.getElementById('buttonAceitar').addEventListener('click', async function (params) {
    params.preventDefault();

    var data = JSON.parse(localStorage.getItem('client'))

    var url = `http://127.0.0.1:8080/users/${data.id}`


    var nome = document.getElementById('campo_nome').value;
    var email = document.getElementById('campo_email').value;
    var telefone = document.getElementById('campo_telefone').value;

    update(url, {
        name: nome,
        password: data.password,
        email: email,
        phone: telefone,
        document: data.document, 
        age: data.age

    }, callback => {
        localStorage.setItem('client', callback);

        var data = localStorage.getItem('client')

        insertDados(JSON.parse(data));
    })

    alert('Dados atualizados com sucesso')

    window.location.reload();

});

// --------------------------------------------------------------------------------------------------

async function putApi(url, data, callback) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if ((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200) {
            callback(this.responseText)
        }
    };
    xhr.open('PUT', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

async function update(url, data, callback) {
    putApi(url, data, response => callback(response))
}

// --------------------------------------------------------------------------------------------------
function insertDados(data) {
    nameClient.innerHTML = data.name;
    emailClient.innerHTML = data.email;
    telefoneClient.innerHTML = data.phone;
}

