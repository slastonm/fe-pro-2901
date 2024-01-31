let thisYear = 2023;

console.log(`Test ${thisYear === 2024}`);

if(thisYear === 2024){
    // alert('Wellcome');
    console.log('Hello if');
}
else{
    console.log('this year no 2024');
}

// let userNumber = Number(prompt('Chose number'));

// if(userNumber == 0){
//     console.log(`User chose ${userNumber}`);
// }
// else if(userNumber>10){
//     console.log(`User chose ${userNumber}`);
// }
// else{
//     console.log(`Use chose ${userNumber} or somthing else`);
// }

// let helloUser = prompt('How are you')

// Fine == fine 
// if(helloUser =='fine' || helloUser =='Fine' || helloUser =='not bad' ){
//     console.log('Nice, have a greate day');
// }
// else{
//     console.log('Bye!');
// }

let userAge =  20;
let studyCourse = userAge < 18;


if(!studyCourse){
    console.log(`User age not allowed`);
}

let maxValue = 0;
let firstNumber = 3;
let secondNumber = 2;

if(firstNumber>secondNumber){
    maxValue = firstNumber
    // console.log(`${firstNumber} > ${secondNumber} maxvalue ${maxValue}`);
}
else{
    maxValue = secondNumber
    // console.log(`${secondNumber} > ${firstNumber} maxvalue ${maxValue}`);
}
maxValue = firstNumber>secondNumber ? firstNumber : secondNumber;
console.log(maxValue);

// let userName = prompt('UserName');
// let userPassword = prompt('User password');

// if(userName == 'admin' && userPassword == '12345'){
//     alert('Hello admin');
// }
// else if(userName == 'user' && userPassword === 'qwerty'){
//     alert('Hello user');
// }
// else{
//     alert('No any information about user');
// }

let checkUserAge = Number(prompt('Type user age'));

let controlAge = checkUserAge>18 ? 'Yes' : 'No';
console.log(controlAge);
if(controlAge == 'Yes'){
    document.write(`<h1>Hello</h1>`);
}
else{
    document.write(`<h1>Goodbye!</h1>`);
}

