// let newMath = new Math(); Math is not a constructor

console.log(Math.PI);
console.log(Math.pow(4,4));
console.log(Math.sqrt(4));
console.log(Math.sqrt(64));

let minValue = Math.min(0, 100, 20, 30, -10);
console.log(minValue);

let maxValue = Math.max(0, 100, 20, 30, -10);
console.log(maxValue);

let minStable = Math.floor(4.8);
console.log(minStable);
let maxStable = Math.ceil(4.1);
console.log(maxStable);
let roundStable = Math.round(4.4);
console.log(roundStable);

// Math.random() 0-1
// 0, 1, 2
// ['Камінь', 'Ножниці','Папір'] 
// Prompt
// if, if else, else

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

function random(){
    return Math.floor(Math.random()*100);
}





