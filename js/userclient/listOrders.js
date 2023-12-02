var client = JSON.parse(localStorage.getItem('client')); 

console.log(client)

var tabela = document.getElementById('table');

var url = `http://127.0.0.1:8080/orders/search_orders_user/${client.id}`; 

const formatterNumber = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
})

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + 1),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('/');
}

// ---------------------------------GET API---------------------------------------


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

    const listObject = await response.json();
    return callback(listObject);
}

async function ordersData(url, callback) {
    getApi(url, response => callback(response));
}



// -------------------------------------------INNER HTML-----------------------------------------------
ordersData(url, callback => {
    const listObject = callback;

    render(listObject);
})


async function render(listObject) {
    let list = `<tr>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Serviço</th>
                    <th>Preço</th>
                    <th>Cancelar</th>
                </tr>`;

    if (listObject == null) {
        list = `<p>Usuario não existente</p>
        <p>Busque novamente</p>`;
    } else {
        try {
            listObject.forEach(element => {
                list += `<tr>
                            <td>${element.date}</td>
                            <td>${element.time}</td>
                            <td>${element.workOrder.categoryWork}</td>
                            <td>${formatterNumber.format(element.workOrder.price)}</td>
                            <td><button class = "btn btn-danger" id="cancelamento" data-remove=${element.id}>X</button></td>
                        </tr>`;
            });
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    tabela.innerHTML = list;
}
