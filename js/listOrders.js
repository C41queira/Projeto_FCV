var url = "http://127.0.0.1:8080/orders/search_orders_user/1"

var xhr;

if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    xhr = new ActiveXObject();
}

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        var listObject = JSON.parse(xhr.responseText); 
        listObject.forEach(element => {
            createTr(element); 
        }); 
        console.log(JSON.parse(xhr.responseText));
    }
}

xhr.open("GET", url, true);
xhr.setRequestHeader("Accept", "application/json");
xhr.send();

/* ------------------------------------------------------------------------------------------------- */

var table = document.getElementById("table");

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

