// let, var, const

// console.log(varValue);

// var varValue = 'Test';
let varValue = 'Test';

console.log(varValue);
// 

if(true){
    var oldValue = 'Inside if value';
    // let oldValue = 'Inside if value';

}
console.log(oldValue);

for(var i = 0; i<5; i++){
    console.log(i);
}
console.log(`Outside loop ${i}`);

const MYKEY = 'SecretKey12345';

// MYKEY = 12345;
// MYKEY = '12345';

console.log(MYKEY);

const dataArray  = ['Tom', 'Bob'];
// dataArray = 111;
dataArray.push('Vika');
dataArray.push('Anna');
dataArray.pop();
dataArray.pop();

console.log(dataArray);

const myKeyObj = {
    key: '12345'
}

// myKeyObj = ['test'];
myKeyObj.maxAge = '3days';

myKeyObj.key = ['new value'];

delete myKeyObj.maxAge;
console.log(myKeyObj);

let product = {
    
}
