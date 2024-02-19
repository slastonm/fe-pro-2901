let numberExample = 42;
console.log(`Тип значення змінної ${typeof numberExample}`);
console.log(`Тип значення змінної ${typeof 43}`);

let stringValue = 'String';

console.log(`Тип значення змінної ${typeof stringValue}`);
console.log(`Тип значення змінної ${typeof "43"}`);

let arrayValue = [1,2,3];

console.log(`Тип значення змінної ${typeof arrayValue}`);

let objValue = {key:'Value'};
console.log(`Тип значення змінної ${typeof objValue}`);

let booleanExample = false;
console.log(`Тип значення змінної ${typeof booleanExample}`);

console.log(`Тип значення змінної ${typeof null}`);

console.log(`Тип значення змінної ${typeof undefined}`);

const uniqKey = Symbol('key');
const uniqKeyKey = Symbol('key');

console.log(uniqKey == uniqKeyKey);
console.log(uniqKey === uniqKeyKey);

console.log(`Тип значення змінної ${typeof uniqKey}`);
let hello = function(){
    console.log('Hello');
}
console.log(`Тип значення змінної ${typeof hello}`);

console.log(`Тип значення змінної ${typeof class user{}}`);

console.log(`Тип значення змінної ${typeof new Date()}`);



