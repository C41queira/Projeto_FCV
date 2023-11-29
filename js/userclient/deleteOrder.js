
document.body.addEventListener('click', function (event) {
    event.preventDefault;

    const productId = event.target.getAttribute('data-remove');

    if (productId) {
        console.log('Remove: ' + productId);
        deleteOrder(productId);
        alert('Serviço cancelado')
        window.location.reload(); 
    }

})

async function deleteOrder(productId) {
    try {
        let response = await fetch(`http://localhost:8080/orders/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

    } catch (error) {
        console.error(error);
    }
}

