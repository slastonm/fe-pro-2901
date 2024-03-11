let comValue = /com/;
let paterRegEx = /\d\d\d/; // 
let regClass = new RegExp('Hello');
let regClassMeta = new RegExp('\d');

let searchText = ' Hello 008 text  hello';
let searchRegExp = /\d\d\d/g;

let searchIndex = searchText.search(searchRegExp);
console.log(searchIndex);

let replaceText = 'I know 123 css css 321 007 145 234';
let resultText = replaceText.replace(searchRegExp, 'js');
console.log(resultText);

let matchNumber = 'Text 12 hello world 123 test regular expresion 124 and 1';
let numberFromText = matchNumber.match(searchRegExp);


console.log(numberFromText);

let calculatorValue = '5 плюс 2 = 7';
let calculatorValueNumbers = calculatorValue.match(/\d/g);
console.log(calculatorValueNumbers);

let strMatch = "Are you ok? Yes I'm OK";
let replaceString = strMatch.replace(/ok/gi, 'fine');
console.log(replaceString);

let splitText = 'product-123item-124user-125';
// let simpleSplit = splitText.split('-');
let simpleSplit = splitText.split(/-\d\d\d/g);

console.log(simpleSplit);

let pinCodeRegExp = /\d\d\d\d/;

let userInput = '12a4';

if(pinCodeRegExp.test(userInput)){
    alert('Valid pin');
}
else{
    alert('invalid pin');
}

console.log(`Test user pin code ${pinCodeRegExp.test('123')}`);
console.log(`Test user pin code ${pinCodeRegExp.test('1237')}`);
console.log(`Test user pin code ${pinCodeRegExp.test('123!')}`);
console.log(`Test user pin code ${pinCodeRegExp.test('$23!')}`);





