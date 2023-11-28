var nome = 'Renato Oliveira Jr';
var senha = 'niemuCh5Sei';
var email = 'renatocarv@gmail.com';
var documento = '155.822.037-08';
var idade = '25 anos';
var telefone = '(19) 9630-4855';

// var data = JSON.parse(localStorage.getItem('client'));

document.getElementById('').addEventListener('click', async function (params) {
    params.preventDefault();

    await fetch('http://192.168.0.9:8080/users/2', {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nome,
            email: email,
            document: documento,
            password: senha,
            age: idade,
            phone: telefone
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then(() => {

            getUser('http://192.168.0.9:8080/users/2', callback => {
                const user = callback;

                localStorage.setItem('client', JSON.parse(user))

                console.log(localStorage.getItem('client'))
            })
            alert("Dados atualizados com sucesso!");
            window.location.href = "../login_registration/login.html";
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

// --------------------------------------------------------------------------------------------------

async function getApi(url, callback) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const user = await response.json();
    return callback(user);
}

async function getUser(url, callback) {
    getApi(url, response => callback(response));
}

