let strValue = "St";
let simpleString = 'String value';
console.log(strValue.length);
console.log(simpleString);

let knowlage = 'Html css css';
let newKnowlage = knowlage.replace('css', 'scss');
console.log(newKnowlage);

let sliceValue = knowlage.slice(4,8);
console.log(sliceValue);

let options = ['Камінь','Ножниці', 'Папір'];
let stringOption = options.join();

// let transform = stringOption.toLowerCase();
let transform = stringOption.toUpperCase();
// let arrayTransform = transform.split();
// let arrayTransform = transform.split('');
let arrayTransform = transform.split(',');

console.log(transform);
console.log(arrayTransform);

let userInput = prompt('Type something');
// let trimValue = userInput.trim();
// let trimValue = userInput.trimEnd();
// let trimValue = userInput.trimStart();


console.log(trimValue.length);
console.log(trimValue);

