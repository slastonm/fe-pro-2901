window.onload = function(){
    window.sessionStorage.setItem('MySessionKey','qwerty123');
    window.sessionStorage.myKey = 'Test key';
    window.sessionStorage['test']='test value';

    window.sessionStorage.myKey = 'New value';

    console.log(`Get item ${window.sessionStorage.getItem('test')}`)
    console.log(`Get item by key ${window.sessionStorage.myKey}`)
    console.log(`Get item by dynamic key ${window.sessionStorage['MySessionKey']}`)

    window.sessionStorage.clear();
    window.sessionStorage.removeItem('myKey');


    window.localStorage.setItem('localKey', 'True value');
    window.localStorage.myLocal = 'qwerty123';
    window.localStorage['newLocal'] = 'New local storage value';

    console.log(`Get item ${window.localStorage.getItem('newLocal')}`)
    console.log(`Get item by key ${window.localStorage.myLocal}`)
    console.log(`Get item by dynamic key ${window.localStorage['localKey']}`)

    let product ={
        productName:'Laptop',
        productPrice:'1000$'
    }

    window.localStorage.basket = JSON.stringify(product);
    let valueStorage = JSON.parse(window.localStorage.basket);

    console.log(valueStorage);
    console.log(valueStorage.productName);
    console.log(valueStorage.productPrice);

    window.localStorage.menuState = true;
    console.log(`Type of data from storage ${typeof window.localStorage.menuState}`)
    console.log(`Type of data from storage ${window.localStorage.menuState}`)

    // window.localStorage.basket = 'new value';
    let tempLocalValue = JSON.parse(window.localStorage.basket);
    let products = [
        {
            productName:'TV',
            productPrice:'800$' 
        }
    ];
    products.push(tempLocalValue);
    window.localStorage.basket = JSON.stringify(products);

    window.localStorage.removeItem('menuState');
    // window.localStorage.clear();

}