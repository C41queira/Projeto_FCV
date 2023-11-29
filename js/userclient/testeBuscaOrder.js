var date = document.getElementById('date');

var nome = document.getElementById('nome');

var table = document.getElementById("table");

var url = "http://127.0.0.1:8080/orders";


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
                    <th>Cliente</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Serviço</th>
                    <th>Preço</th>
                </tr>`;

    if (listObject == null) {
        list = `<p>Usuario não existente</p>
        <p>Busque novamente</p>`;
    } else {
        try {
            listObject.forEach(element => {
                list += `<tr>
                        <td>${element.userClient.name}</td>
                        <td>${element.date}</td>
                        <td>${element.time}</td>
                        <td>${element.workOrder.categoryWork}</td>
                        <td>${formatterNumber.format(element.workOrder.price)}</td>
                    </tr>`;
            });
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    table.innerHTML = list;
}


// -------------------------------------------FILTER LIST-----------------------------------------------

async function searchInKeyupName(event) {
    const searched = event.target.value;

    ordersFiltersName(searched, function (element) {
        const ordersFound = element;

        if (ordersFound.length > 0) {
            render(ordersFound)
        } else {
            render();
        }
    });
}

async function searchInKeyupDate(event) {
    const searched = event.target.value;

    ordersFiltersDate(searched, function (element) {
        const ordersFound = element;

        if (ordersFound.length > 0) {
            render(ordersFound)
        } else {
            render();
        }
    });
}

async function ordersFiltersName(searched, callbackFilter) {

    await ordersData(url, callback => {
        const listObject = callback;

        callbackFilter(listObject.filter(function (order) {
            return order.userClient.name.toLowerCase().includes(searched.toLowerCase());
        })
        )
    })
}

async function ordersFiltersDate(searched, callbackFilter) {

    await ordersData(url, callback => {
        const listObject = callback;

        callbackFilter(listObject.filter(function (order) {
            return order.date.includes(formatDate(searched));
        })
        )
    })
}

nome.addEventListener('keyup', _.debounce(searchInKeyupName, 400))
date.addEventListener('keyup', _.debounce(searchInKeyupDate, 1000))
