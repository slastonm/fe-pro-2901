// alert('Hello from js file');
// Старий спосіб створення змінних
// var salt = 'salt';
// var Salt = "salt";

let userName = 'Tom';
let UserName = 'Tom';
let user_name = 'Tom';
let username = 'Tom';
let USERNAME = 'Tom';

const USERKEY = '12345';

// https://www.w3schools.com/js/js_reserved.asp

userName = 'Bob';
// userName = 23;

//Number

let numberValue = 100;
let numberFloat = 0.33;
let numberNan = NaN;
let numberInfinity = Infinity;

console.log('Hello console');
console.log(numberInfinity);
console.log(numberValue);
console.log(numberNan);
console.log('NumbeFloat', numberFloat);
console.log('Max value:', Number.MAX_VALUE);
console.log('Min value:', Number.MIN_VALUE);
console.log('Max value:', Number.POSITIVE_INFINITY);
console.log('Min value:', Number.NEGATIVE_INFINITY);


let newValue = userName + numberValue;
console.log('newValue =', newValue);

let firstValue = '10';
let secondValue = 10;
let summVariables = firstValue + secondValue;
console.log('Result', summVariables);
console.log(firstValue+secondValue);
console.log(firstValue-secondValue);
console.log(firstValue*secondValue);
console.log(firstValue/secondValue);
console.log(firstValue%secondValue);

//Bolean
let trueValue = true;
let falseValue = false;

//Null Undefined
let noValue = null;
let emptyValue;
// console.log(emptyV);

// alert(trueValue);
// prompt('Як ваш день?');
// let dayInfo = prompt('Як ваш день?');
// let dayInfo = prompt('Як ваш день?', 'Пусте значеня');
// console.log('DayInfo from prompt', dayInfo);

let firstPrompt = prompt('Напишіть перше число');
let secondPrompt = Number(prompt('Напишіть друге число'));
let firstPoromptNumber = parseFloat(firstPrompt);
let summOperation = firstPoromptNumber+secondPrompt;
console.log(summOperation);
// console.log(+firstPrompt+ +secondPrompt);
// console.log(parseInt(firstPrompt));
// console.log(parseFloat(firstPrompt));
// console.log(Number(firstPrompt));


// fe-pro-290124

