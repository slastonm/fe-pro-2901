// let catRegEx = /кіт$/; Кінець рядка
//let catRegEx = /^кіт/; // 
let catRegEx = /\btest\b/;
let catStart = 'tester на початку';
let catEnd = 'а тут в кінці test';
let catMod = 'а тут в кінці кiiiт';
let notCat = 'а тут в кінці кит';
// let catRegEx = /к*т/; // 
// let catRegEx = /ко?т/; 
console.log('test b');
console.log(catRegEx.test(catStart));
console.log(catRegEx.test(catEnd));
console.log('test b');
// console.log(catRegEx.test(catMod));
// console.log(catRegEx.test(notCat));
// console.log(catRegEx.test('кт'));
// console.log(catRegEx.test('кот'));
// console.log(catRegEx.test('кііііт'));
// console.log(catRegEx.test('коот'));


let smiles = [':)', ';(', ':-)', ':-('];

let catDog = /кіт|пес/;
console.log(catDog.test('це малий кіт'));
console.log(catDog.test('це малий пес'));
console.log(catDog.test('це малий тест'));

let firstTime = 'Time:7:43';
let secondTime = '107:43';

let timeCheck = /^\d{1,2}:\d{2}$/;

console.log(`Is valid: ${timeCheck.test(firstTime)}`);
console.log(`Is valid: ${timeCheck.test(secondTime)}`);

let dateTest = '12-03-2024';
let dateChecker = /\d{1,2}-?\d{1,2}-?\d{4}/;

console.log(`Is date valid: ${dateChecker.test(dateTest)}`);
console.log(`Is date valid: ${dateChecker.test('1232024')}`);

//userName@gmail.com

let emailRegEx = /^[a-z0-9.-_]+@[a-z]{2,5}.[a-z]{2,3}$/i;

console.log(`Is email valid: ${emailRegEx.test('userName@gmail.com')}`);
console.log(`Is email valid: ${emailRegEx.test('user-na_me@gmail.com')}`);
console.log(`Is email valid: ${emailRegEx.test('user333@gmail.com')}`);
console.log(`Is email valid: ${emailRegEx.test('333@gmail.com')}`);








