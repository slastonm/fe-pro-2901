let arrayValue = [];
console.log(arrayValue);

let user = {
    userName:'user name value',
    // sayHi:function(){
    //     return `This username: ${this.userName}`;
    // }
    sayHi:()=>{
        return `This username: ${this.userName}`;
    }
}

console.log(user.sayHi());

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    // this.info = function(){
    //     return `About book ${this.title}, ${this.year}`;
    // }
}
Book.prototype.info = function(){
        return `About book ${this.title}, ${this.year}`;
    }
let bookHarry = new Book('Harry Potter', 'Rowling', 1998);
let bookHarry2 = new Book('Harry Potter 2', 'Rowling', 2000);
console.log(bookHarry);
console.log(bookHarry.info());
console.log(bookHarry2);
console.log(bookHarry2.info());

class Book2{
    constructor(title, author, year){
        this._title = title;
        this._author = author;
        this._year = year;
    }
    info(){
        console.log(`About book ${this._title}, ${this._year}`);
    }
    get title(){
        return `${this._title} and ${this._year}`;
    }
    set title(newTitle){
        this._title = newTitle;
    }
    static createBookCSV(value){
        const [title, author, year] = value.split(',');
        return new Book2(title, author, parseInt(year));
    }
}

let bookHarry3 = new Book2('Harry Potter 3', 'Rowling', 2001);
console.log(bookHarry3);
bookHarry3.info();
bookHarry3.title = 'Harry Potter 3 new edition';
console.log(bookHarry3.title);
console.log(bookHarry3);
// CSV  "Harry Potter 4,Rowling, 2003"

// bookHarry3.createBookCSV("Harry Potter 4,Rowling, 2003");
let bookFromString = Book2.createBookCSV("Harry Potter 4,Rowling, 2003");
console.log(bookFromString);

// Інкапсуляція

class Product{
    constructor(productName, price){
        this._productName = productName;
        this._price = price;
    }
    productInfo(){
        console.log(`Product infor ${this._productName}  and price:${this._price}$`);
    }
}

// Наслідування

class Laptop extends Product{
    constructor(productName, price, type){
        super(productName, price);
        this._type = type;
    }
}

let laptopHP = new Laptop('HP', 1000, 'Study');
console.log(laptopHP);
laptopHP.productInfo();

// Поліморфізм

class Basket{
    constructor(){
        this._produts=[];
    }
    addPoduct(product){
        this._produts.push(product);
    }
}

let tomat = new Product('Tomat', 1);
let productsBasket = new Basket();
productsBasket.addPoduct(laptopHP);
productsBasket.addPoduct(tomat);

console.log(productsBasket);

productsBasket._produts.forEach(item=>{
    item.productInfo();
})