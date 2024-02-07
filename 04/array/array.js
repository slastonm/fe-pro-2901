// let transport1 = 'car';
// let transtort2 = 'bus';

let firstArray = [];
let secondArray = new Array(10);

firstArray = ['String', 2, 3, true, , , false, ['array Inside array', 2, 3,4]];

console.log(firstArray);
console.log(secondArray);

console.log(firstArray.length);

console.log(firstArray[0]);
console.log(firstArray[2]);
console.log(firstArray[20]);

for(let i=0; i<firstArray.length; i++){
    console.log(`Array value ${firstArray[i]}`);
}

console.log(firstArray[firstArray.length-1][3]);

let multiArray = [
    ['UserName', 'html, css'],
    ['UserName2', 'html, css, js'],
    ['UserName3', 'html']
]

for(let i = 0; i<multiArray.length; i++){
    // console.log(multiArray[i]);
    for(let y=0; y<multiArray[i].length; y++){
        console.log(`User info ${multiArray[i][y]}`);
    }
}

let newNumbersArr = [];// 2,4,6,8
let numberArr = [1,2,3,4,5,6,7,8];

for(let i=0; i<numberArr.length; i++){
    newNumbersArr.push(numberArr[i]*2);
}

newNumbersArr.pop();

console.log(newNumbersArr);

let productList = [];
productList.unshift('milk');
productList.unshift('cookie');
productList.unshift('cola');
productList.unshift('tomatos');

console.log(productList);

productList.shift();
productList.shift();
productList.shift();

console.log(productList);

console.log(Array.isArray(productList));

let fillArr = [1,2,3,4,5,6];
let newFillArr = fillArr.fill('New value', 0, 4);
// console.log(fillArr);
console.log(newFillArr);

let sortArr = [8, 16, 3, 12, 1];
// sortArr.sort();
// sortArr.sort((a,b)=>a-b);
sortArr.sort((a,b)=>{return b-a});
console.log(sortArr);


let spliceArr = [0,1,3,4,5,6];
// spliceArr = spliceArr.splice(); []
// spliceArr = spliceArr.splice(2); [ 3, 4, 5, 6 ]
spliceArr = spliceArr.splice(0,4);
console.log(spliceArr);

let startArr = ['First',2,3,4,5,'Last'];
startArr.reverse();
console.log(startArr);


let firstArr = [1,2,3];
let secondArr = [4,5,6];
firstArr = firstArr.concat(secondArr, 7, 8, [9, 10]);

console.log(firstArr);

let users = ['Anna', 'Tom', 'Den', 'Dima', 'Alex'];
console.log(users.includes('Tom'));
console.log(users.includes('Tomas'));

console.log(users.indexOf('Dima'));
console.log(users[3]);
console.log(users.indexOf('Tomas'));

let joinArr = ['Hello', 'World'];
// let afterJoin = joinArr.join('');
let afterJoin = joinArr.join(',');
// split
let text = 'Future,array';
console.log(text.split(','));

console.log(afterJoin);


let sliceArr = [0,1,2,3,4,5,6];
// let newArray = sliceArr.slice(); full copy
// let newArray = sliceArr.slice(3);
// let newArray = sliceArr.slice(-3); 
let newArray = sliceArr.slice(2,4);

console.log(newArray);

let price = [100, 150, 120, 180, 200, 135, 125];
function sortPrice(price){
    return price>120;
}
let sortedPrice = price.filter(sortPrice);
console.log(sortedPrice);
