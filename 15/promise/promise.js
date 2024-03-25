let firstPromise = new Promise(function(resolve, reject){
    console.log('My promise');
});

const a = 2;
const b = 0;

// let mathPromise = new Promise(function(resolve, reject){
//     if(b === 0){
//         reject(alert(`Value ${b} bad for / operation`));
//     }
//     else{
//         let result = a/b;
//         resolve(alert(`Result ${result}`));
//     }
// }).catch((error)=>{
//     console.log(error);
// });

let c = 3;

let thenPromise = new Promise(function(resolve, reject){
    if(c>2){
        resolve('c greate than 2');
    }
    else{
        reject('Small value C');
        throw 'Small value';
    }
}).catch((error)=>{
    console.log(error);
});

thenPromise.then(function(value){
    console.log(`Promise value ${value}`);
}).catch((err)=>{
    console.log(`Promise ${err}`);
}).finally(()=>{
    console.log('Finaly work anyway');
});


let firstP = new Promise(function(resolve, reject){
    resolve('First promise data');
});

let secondP = firstP.then(function(value){
    return `${value} + second promise value`;
});

let thirdP = secondP.then(function(newValue){
    console.log(`${newValue} final promise then`);
});

let shortVersion = new Promise(resolve=>resolve('Short first'))
.then(value=>`${value} + second promise`)
.then(newValue =>`${newValue} third then`)
.then(finalValue =>{
    console.log(finalValue);
})

