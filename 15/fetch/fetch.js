// let promiseFetch = fetch('url', [options])
// .then(response => response.formData())
// .then(response => response.text())
// .then(response => response.blob())



fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))

let post = {
    userId: 10, id: 10, title: "My title", completed: true 
}
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify(post),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
        'key': 'secretKey'
    }
}).then(response =>response.json())
.then(data=>console.log(data));