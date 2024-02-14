



// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for(let student of students){
    // tr
        // td td td
    // { name: 'Alice', age: 20, grade: 'A' }
    console.log(student);
    for(let key in student){
        console.log(`Info ${student[key]}`);
    }
}
// Завдання на map
// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

let numbersArr = [1,2,4];
let squaresNumbersArr = numbersArr.map(number=>number*number);
console.log(squaresNumbersArr);
// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує  стрінг до значення 'new value'

function mapWithTransform(array, callback){
    let newArr = array.map(item=>callback(item));
    // return array.map(item=>callback(item));
    return newArr;
}

let newVlueArr = mapWithTransform(numbersArr, item=>`new value: ${item}`);
console.log(newVlueArr);


// Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад 
const numberArr = [10,20,30];
let summ = 0;
// numberArr.forEach(number=> summ+=number);
numberArr.forEach(number=> summ=summ+number);
console.log(summ);

// Додаткове завдання:
// Напишіть функцію, яка використовує forEach для створення масиву, що містить лише унікальні елементи вихідного масиву.
// Тобто якщо предаєте numberArr = [10,20,30, 20, 10] отримуєте numberArr = [10,20,30]
let numberArrUniq = [10,20,30, 20, 10, 10, 11, 20, 33, 30]
function filterArrayFn(array){
    let uniqValue = [];
    array.forEach(item=>{
        if(!uniqValue.includes(item)){
            uniqValue.push(item);
        }
    });
    return uniqValue;
}

console.log(filterArrayFn(numberArrUniq));

// Напишіть функцію, що приймає масив чисел і колбек-функцію. Функція повинна використовувати for...of для обходу по масиву та викликати колбек-функцію для кожного елемента. Колбек-функція повинна повертати true або false, вказуючи, чи слід включити поточний елемент до нового масиву.

// Передавши масив  [1, 2, 3, 4, 5] і колбек-функція, що відбирає парні числа.

// повині отримати  новий масив з парними числами [2, 4].