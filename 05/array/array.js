let products = ['tv','phone', 'laptop'];
products.forEach((value,index,array)=>{
    console.log(`Array value ${value}, index: ${index} all array ${array}`);
});

products.forEach(productItem=>{
    console.log(`Product ${productItem}`);
});

let afterMap = products.map((value, index, array)=>`Map: Array value ${value}, index: ${index} all array ${array}`);
console.log(afterMap);

let doubleValue = (a)=>a*2;
// function modifyArray(arrayValue, callback){
//     let newArray = [];
//     for(let i=0; i<arrayValue.length; i++){
//         newArray.push(callback(arrayValue[i]));
//     }
//     return newArray;
// }

let newArray = [1,2,4].map(doubleValue);
console.log(newArray);

let userInfo = ['Tom', ['html', 'css', 'js', 'java'], ['link1', 'link2']];
// userInfo[1]
// userInfo[2]
