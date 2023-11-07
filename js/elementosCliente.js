const nameClient = document.getElementById('name'); 
const email = document.getElementById('email'); 

const telefone = document.getElementById('telefone'); 

var data = JSON.parse(sessionStorage.getItem('client')); 

nameClient.innerHTML = data.name;
email.innerHTML = data.email; 
telefone.innerHTML = data.phone;

