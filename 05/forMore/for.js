
let myArray = [1,2,3, true, 'value', 'test'];
for(let value of myArray){
    console.log(value);
}

for(let letter of 'String'){
    console.log(letter);
}

// for(let key of {user:'Tom', age:30}){
//     console.log(key);
// }

let myObj = {user:'Tom', age:30};

for(let key in myObj){
    console.log(`a: ${key} value ${myObj[key]}`);
}