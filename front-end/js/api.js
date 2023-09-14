function getApi(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if ((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200){
            callback(this.responseText)
        }
            
    };

    xhr.open('GET', url, true); 
    xhr.setRequestHeader("Accept", "application/json"); 
    xhr.send(); 
}

function getUser(url, callback){
    getApi(url, data => callback(JSON.parse(data)));
}

export {getUser}; 