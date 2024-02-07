
let functionExpresion = function(){
    // alert('Hello');
    return 'hello';
}
functionExpresion();
// function sayHi(){
//     alert('Hello');
// }

function wellcomeUser(){
    document.write(`<h1>Wellcome</h1>`);
}
function goodBye(){
    document.write(`<h1>Goodbye</h1>`);
}


function checkAge(age, showOk, showCancel){
    if(age>18){
        // alert('Wellcome');
        showOk();
    }
    else{
        // alert('Goodbye');
        showCancel();
    }
}

checkAge(2, wellcomeUser, goodBye);

function summFn(a,b){
    return a+b;
}
let summ = (firstValue, secondValue)=>firstValue+secondValue;
console.log(summ(2,3));

let userName = 'user';
let wellcomFn = (userName == 'admin')?
    ()=>`Hello ${userName}`:
    ()=>`Simple user ${userName}`

console.log(wellcomFn());

let divide =(a,b)=>{
    if(b==0){
        alert('0 is imposible');
    }
    else{
        return a/b;
    }
}

let defaultFnValue= function(userName='No information about user'){
    console.log(userName);
}

defaultFnValue(); 

// let i = 2;

function callI(){
    let i = 3;
    console.log(i);
    function inside(){
        console.log(`Inside CallI ${i}`);
    }
    inside();
}

// console.log(i);
callI();