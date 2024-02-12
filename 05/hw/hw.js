
let userNumber = 2;
// console.log(`2*0=${userNumber*0}`);
// console.log(`2*1=${userNumber*1}`);

// for(let i=0; i<10; i++){
//     console.log(`${userNumber}*${i}=${userNumber*i}`);
// }

function multiply(number=1, periodNumber=5){
    for(let i=0; i<periodNumber; i++){
        console.log(`${number}*${i}=${number*i}`);
    }
}

multiply(4,2);
// multiply(20,5);
// multiply(3,4);

function addNewItem(productArray){
    productArray.push('new item tv');
}
let anotherProducts = ['phone2', 'laptop2'];
let products = ['phone', 'laptop'];

addNewItem(products);
console.log(products);
addNewItem(anotherProducts);
console.log(anotherProducts);

let arrayMod = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];
// arrayMod.length
let newItemsSecond = [];
function removeItem(value){
    let newItems = [];
    for(let i=0; i<value.length; i++){
        if(value[i]=="Keep"){
            newItems.push(value[i]);
        }
    }
    return newItems
}


function removeItemSecond(value){
    for(let i=0; i<value.length; i++){
        if(value[i]=="Keep"){
            newItemsSecond.push(value[i]);
        }
    }
}

let newArray = removeItem(arrayMod);
console.log(newArray);

removeItemSecond(arrayMod);
console.log(newItemsSecond);

let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідни"];

function dayPlaner (dayArray, planArray){
    if(dayArray.length === planArray.length){
        for(let i=0; i<dayArray.length; i++){
            console.log(`Сьогодні ${dayArray[i]} у вас такі плани ${planArray[i]}`);
        }
    }
    else{
        console.log('Додайте інформації');
    }
}

dayPlaner(days, plans);




// Колбек функції 
// Створіть функцію калькулятор яка отримує 2 значення і колбек функцію дії, далі в залежності від знаку ми викликаємо нашу функцію з данними  наприклад calculatorFn(2,3, summ).
// Створіть функцію modifyArray яка приймає массив та колбек функцію та повертає новий массив в якому кожне значення массиву змінене колбек функцією. ( наприклад помножене на 2 )

let doubleValue = (a)=>a*2;
function modifyArray(arrayValue, callback){
    let newArray = [];
    for(let i=0; i<arrayValue.length; i++){
        newArray.push(callback(arrayValue[i]));
    }
    return newArray;
}

console.log(modifyArray([1,2,3], doubleValue));
console.log(22222222);
console.log(modifyArray([10,20,30], doubleValue));


