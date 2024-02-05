let a = 1;
let b = 2;
let res = 0;

if(a>b){
    res = a+b;
}
else{
    res = a-b;
}
if(b>a){
    res = a+b;

}
else{
    res = a-b;
}
// На момент створення функції значення в (пареметри)
function summ(firstNumber, secondNumber){
    console.log(`Summ ${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`);
}
// На момент виклику функції значення в (аргументи)
summ(a, b);
summ(10, 20);
summ(true, '20');
summ(true, false);











let userFirstNumber = Number(prompt('Type number'));
let userSecondNumber = Number(prompt('Type number'));

function minus(firstNumberMinus, secondNumberMinus){
    console.log(`Minus ${firstNumberMinus} - ${secondNumberMinus} = ${firstNumberMinus-secondNumberMinus}`);
}

function divide(firstNumberDivide, secondNumberDivide){
    console.log(`Divide ${firstNumberDivide} / ${secondNumberDivide} = ${firstNumberDivide/secondNumberDivide}`);
}

function checkNumber(value){
    if(value>0){
        return true;
    }
    else{
        return false;
    }
}

let myValue = checkNumber(2);// 'Value true'
console.log(myValue);
let myCheckValue = checkNumber(0);
console.log(`Mycheckvalue ${myCheckValue}`);
console.log(`Check value 2 ${checkNumber(2)} and check number 3 = ${checkNumber(3)}`);

let userOperation = prompt('User chose operation +-/*%');
switch (userOperation) {
    case '+':
        summ(userFirstNumber, userSecondNumber);
        break;
    case '-':
        minus(userFirstNumber, userSecondNumber);
        break;
    default:
        console.log('No information');
        break;
}

if(checkNumber(-1)){
    alert('Hello if');
}
else{
    alert('hello else');
}




