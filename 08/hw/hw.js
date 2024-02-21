function isHighYear(year){
    const febDay = new Date(year, 1, 28);
    const marchDay = new Date(year, 2, 1);
    const res = (marchDay-febDay)/(24*60*60*1000);
    const diferenseValue = res === 2;
    return diferenseValue;
}
console.log(`20021 is highYear ${isHighYear(2021)}`);
console.log(`20020 is highYear ${isHighYear(2020)}`);
console.log(`20019 is highYear ${isHighYear(2019)}`);
console.log(`20018 is highYear ${isHighYear(2018)}`);
console.log(`20017 is highYear ${isHighYear(2017)}`);
console.log(`20016 is highYear ${isHighYear(2016)}`);

// створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть:
// - перший елемент списку
// - останній елемент списку
// - 3 елемент списку

// За допомогою querySelectorAll
// - всі елементи li в списку
// - конвертуйте вибрані елменти в массив

// Створіть на сторінці елемент який вибирається ціми селекторами
// let listItems = document.querySelectorAll('ul.nav > li');
// let listItem = document.querySelectorAll('li:nth-child(2)');

window.onload = function(){
    let third = document.querySelector('li:nth-child(3)');
    console.log(third);
    let allLi = document.querySelectorAll('li');
    // let [...allLi] = document.querySelectorAll('li');
    // let arrLi = Array.from(allLi);
    // allLi.pop();
    // allLi.push('New value');
    console.log(allLi);
}

