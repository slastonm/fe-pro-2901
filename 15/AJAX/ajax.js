// asynchron js and xml
// CORS error
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.onreadystatechange = function(){
     if(xhr.readyState == 4 && xhr.status==200){
        let data = xhr.response;
        console.log(data)
     }
}
// json
// xml
// html
// FormData
// Binarny
xhr.responseType ='json';
xhr.send(null);