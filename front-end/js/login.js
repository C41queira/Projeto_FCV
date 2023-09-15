const form = document.querySelector('#formulario');

function getApi(url, data ,callback) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if ((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200) {
            callback(this.responseText)
        }
    };
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

function login(url, data, callback) {
    getApi(url, data, response => callback(response))
}

form.addEventListener("submit", function (event) {
    event.preventDefault()

    var username = document.getElementById("campo_nome").value;
    var password = document.getElementById("campo_senha").value;

    login("http://localhost:8080/users/login", {name: username, password: password},data =>{
 
        localStorage.setItem('client', data); 

        console.log(localStorage.getItem('client'));

        window.location.href = "pagina_cliente.html"
    })
})