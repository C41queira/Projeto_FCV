const nameClient = document.getElementById('name'); 
const email = document.getElementById('email'); 
const telefone = document.getElementById('telefone');
const idade = document.getElementById('idade');  

var data = JSON.parse(localStorage.getItem('client')); 

console.log(localStorage.getItem('client')); 

nameClient.innerHTML = data.name;
email.innerHTML = data.email; 
telefone.innerHTML = data.phone;
idade.innerHTML = data.age;

