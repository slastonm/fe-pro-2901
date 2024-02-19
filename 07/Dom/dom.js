console.log(window);
console.log(document);

window.onload = function(){
    let pEl = document.getElementsByTagName('p');
    console.log(pEl);
    let classEl = document.getElementsByClassName('test');
    console.log(classEl);
    let idEl = document.getElementById("main");
    console.log(idEl);

    let headerEl = document.querySelector('header.container');

    console.log(headerEl);
    let headerSpanEl = document.querySelector('header span');
    console.log(headerSpanEl);
    let allHeaderSpan = document.querySelectorAll('header span');
    console.log(allHeaderSpan);
    let allSpan = document.querySelectorAll('span');
    console.log(allSpan);
    let specialLi = document.querySelectorAll('ul li');
    console.log(specialLi);

    let liElement = Array.from(specialLi);
    console.log(liElement);
    liElement.forEach(item=>{
        item.innerHTML = `<h3>Hello js</h3>`;
    });

    let [...allSpans] = document.querySelectorAll('span');
    console.log(allSpans);

    let specialParetn = document.querySelector('.special');
    console.log(specialParetn.children);
    let [...childArr] = specialParetn.children;
    console.log(childArr);
    console.log(specialParetn.firstElementChild);
    specialParetn.firstElementChild.innerHTML = 'Hello';
}