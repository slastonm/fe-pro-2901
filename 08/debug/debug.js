let firstValue = 2;
let secondValue = 3;
let result = firstValue+secondValue;
let arrData= ['A','B','C'];
function innerFn(value){
    return value+'new world';
}
arrData.forEach(item=>{
    let res = innerFn(item);
    console.log(res);
})