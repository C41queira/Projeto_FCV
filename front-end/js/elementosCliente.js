import { getUser } from "./api.js";

const name = document.getElementById('name'); 
const email = document.getElementById('email'); 

const telefone = document.getElementById('telefone'); 

getUser('http://localhost:8080/users/3', data => {
    name.innerHTML = data.name;
    email.innerHTML = data.email; 
    telefone.innerHTML = data.phone;  
})