let products = Number(prompt('Кількість товарів')); //5
let price = Number(prompt('Ціна товарів')); // 10

let totalPrice = products*price;
let percentValue = totalPrice/100; // 1%
let discount = percentValue*5; // 5% discount
let shortVersion = (totalPrice/100)*5;
console.log('Discount = ', discount);
let newTotalPrice = totalPrice-discount;
console.log('New price', newTotalPrice);

