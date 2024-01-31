let productPrice = 10;
let productAmount = 10;
let productName = 'Milk';
let paceMark = " ";
let totalProductInfo = productPrice+paceMark+ productName;
console.log(totalProductInfo);

let newString = `Product Info: ${productName} ${(productPrice*productAmount*5)/100}`; // string
console.log(newString);

document.write('Hello');
document.write(`<h1>${productName}</h1><h2>Product price ${productPrice}</h2>`);
