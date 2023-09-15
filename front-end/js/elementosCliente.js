/*import { getUser } from "./api.js";
import { urlClient } from "./login.js";*/

const nameClient = document.getElementById('name'); 
const email = document.getElementById('email'); 

const telefone = document.getElementById('telefone'); 

/*getUser(urlClient, data => {
    name.innerHTML = data.name;
    email.innerHTML = data.email; 
    telefone.innerHTML = data.phone;  
})*/

var data = JSON.parse(localStorage.getItem('client')); 

nameClient.innerHTML = data.name;
email.innerHTML = data.email; 
telefone.innerHTML = data.phone;

