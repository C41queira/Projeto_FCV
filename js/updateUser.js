import { nameClient, emailClient,telefoneClient, idadeClient } from "./elementosCliente.js";

var nome = 'Renato Oliveira';
var senha = 'niemuCh5Sei';
var email = 'renatocarv@gmail.com';
var documento = '155.822.037-08';
var idade = '30 anos';
var telefone = '(19) 9630-4855';

var data = JSON.parse(localStorage.getItem('client'))

var url = `http://127.0.0.1:8080/users/${data.id}`


document.getElementById('botaoEdicao').addEventListener('click', async function (params) {
    params.preventDefault(); 
    
    update(url, {
        name: nome,
        password: senha,
        email: email,
        document: documento,
        age: idade,
        phone: telefone
    }, callback => {
        localStorage.setItem('client', callback); 

        var data = localStorage.getItem('client')

        insertDados(JSON.parse(data)); 
    })

    alert('Dados atualizados com sucesso')
    
    window.location.reload();

});

// --------------------------------------------------------------------------------------------------

async function putApi(url, data ,callback) {
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
function insertDados(data){
    nameClient.innerHTML = data.name;
    emailClient.innerHTML = data.email; 
    telefoneClient.innerHTML = data.phone;
    idadeClient.innerHTML = data.age;    
}

