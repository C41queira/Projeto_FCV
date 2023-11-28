var client = JSON.parse(localStorage.getItem('client')); 

var url = `http://127.0.0.1:8080/orders/search_orders_user/${client.id}`; 

async function getOrders() {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const listObject = await response.json();
    return listObject;
}

async function populateTable() {
    const table = document.getElementById("table");
    try {
        const listObject = await getOrders();
        listObject.forEach(element => {
            createTr(element); 
        }); 
        console.log(listObject);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

populateTable();

/* ------------------------------------------------------------------------------------------------- */

function createTr(data) {

    var newTr = document.createElement('tr');

    var newRow1 = document.createElement('td');
    newRow1.innerHTML = data.date;
    newTr.appendChild(newRow1);

    var newRow2 = document.createElement('td');
    newRow2.innerHTML = data.time;
    newTr.appendChild(newRow2);

    var newRow3 = document.createElement('td');
    newRow3.innerHTML = data.workOrder.categoryWork;
    newTr.appendChild(newRow3);

    var newRow4 = document.createElement('td');
    newRow4.innerHTML = 'R$' + data.workOrder.price;
    newTr.appendChild(newRow4);

    table.appendChild(newTr);

}
