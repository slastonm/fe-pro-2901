let firstNumber = Number(prompt('Перше число'));
// let secondNumber = Number(prompt('Друге число'));

// // true false
// if(firstNumber===secondNumber){
//     console.log('Числа рівні');
// }
// else if(firstNumber > secondNumber){
//     console.log(`Числo ${firstNumber} більше ${secondNumber}`);
// }
// else{
//     console.log(`Числo ${firstNumber} менше ${secondNumber}`);
// }
if(firstNumber%2===0){
    console.log('Парне число');
}
else{
    console.log('Непарне число');
}

let curentYear = 2024;
let birthYear = curentYear - firstNumber;
console.log(`Ваш рік народження ${birthYear}`);

let secretNumber = 10;
if(secretNumber === firstNumber){
    console.log("Вітаємо");
}
else if(firstNumber > secretNumber){
    console.log('Занадто велике');
}
else{
    console.log('Занадто мале');
}


if(firstNumber>=8 && firstNumber<=10){
    console.log('Відмінно');
}
else if(firstNumber>=5 && firstNumber<=7){
    console.log('Добре');
}
else if(firstNumber>=3 && firstNumber<=4){
    console.log('Задовільно');
}
else{
    console.log('Незадовільно');
}

// let result = '';
// let score = 75;
// if (score > 50) {
//     result ="Пройшов";
// } else {
//     result ="Не пройшов";
// }
let score = 75;
let result = score>50 ? 'Пройшов':"Не пройшов";
console.log(result);
// let tempResult = "";
// let temperature = 30;
// if (temperature > 25) {
//     tempResult ="Гаряче";
// } else {
//     tempResult ="Прохолодно";
// }

let temperature = 30;
let tempResult = temperature>25?"Гаряче":"Прохолодно";

let age = parseInt(prompt('Ваш вік'));

let country = prompt('Країна проживання');

if(age>=18 && country == 'Україна'){
    console.log('Вітаємо');
}
else if(age>=18){
    console.log('Перевірте правила');
}
else{
    console.log('Ви сильно молоді');
}
