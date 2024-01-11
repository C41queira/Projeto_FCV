var url = 'http://127.0.0.1:8080/works';

var listaServico = document.getElementById('servico'); 

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

async function works(url, callback) {
    getApi(url, response => callback(response));
}

// -------------------------------------------INNER HTML-----------------------------------------------
works(url, callback => {
    const listObject = callback;

    render(listObject);
})

async function render(listObject) {
    let list = ' '; 

    if (listObject == null) {
        list = `<p> erro no sistema</p>`;
    } else {
        try {
            listObject.forEach(element => {
                list += `<option data-id=${element.id}>${element.name}</option>`;
            });
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    listaServico.innerHTML = list; 
}