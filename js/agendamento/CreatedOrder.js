
document.getElementById('forms_order').addEventListener('submit', async function (params){
    params.preventDefault();

    var client = JSON.parse(localStorage.getItem('client'));
    var servicoName = document.getElementById('servico').value; 
    var servico; 
    var data = document.getElementById('data').value; 
    var time = document.getElementById('time').value;


    try{
        let getServices = await fetch('http://127.0.0.1:8080/works', {
            method:'GET' , 
            headers:{ 'Content-Type': 'application/json'}
        })

        if (!getServices.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const listService = await getServices.json(); 
        console.log(listService)

        listService.forEach(element => {
            if(servicoName == element.name){
                servico = element; 
                console.log(servico)
            }else{
                console.log('serviço não encontrado')
            }
        });

    }catch (error) {
        console.error(error);
    }

    try {
        let response = await fetch('http://127.0.0.1:8080/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: data,
                time: time,
                userClient: client,
                workOrder: servico
            })
        });

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        alert('Serviço agendado com sucesso')

        alert('Agendado com sucesso')
    } catch (error) {
        console.error(error);
    }

})

