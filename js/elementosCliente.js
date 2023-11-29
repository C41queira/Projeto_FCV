export const nameClient = document.getElementById('name'); 
export const emailClient = document.getElementById('email'); 
export const telefoneClient = document.getElementById('telefone');
export const idadeClient = document.getElementById('idade'); 

var data = JSON.parse(localStorage.getItem('client')); 

nameClient.innerHTML = data.name;
emailClient.innerHTML = data.email; 
telefoneClient.innerHTML = data.phone;
idadeClient.innerHTML = data.age;

