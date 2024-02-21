window.onload = function(){
    let navBlock = document.querySelector('.nav');
    console.log(navBlock.children);
    // console.log(navBlock.firstElementChild);
    // console.log(navBlock.firstChild);
    console.log(navBlock.firstElementChild);
    navBlock.lastElementChild.innerText='Last element';
    let activeLi = document.querySelector('.active');
    activeLi.nextElementSibling.innerText ='Next element';
    activeLi.previousElementSibling.innerText = 'Previos element';
    activeLi.parentElement.style.backgroundColor = 'gray';
    let titleEl = document.querySelector('h1');
    let titleParent = titleEl.parentElement;
    console.log(titleParent);
    console.log(titleParent.parentElement);

    let containerEl = document.querySelector('.container');
    let containerTitle = document.createElement('h3');
    containerTitle.innerHTML = 'Hello JS';
    containerEl.appendChild(containerTitle);

    let skillsArr = ['html','css', 'git', 'js'];
    for(let skill of skillsArr){
        let spanEl = document.createElement('span');
        // spanEl.innerHTML =skill;
        spanEl.innerHTML =`User skill <strong>${skill}</strong>`;
        containerEl.appendChild(spanEl);
        // containerEl.prepend(spanEl);
        // containerEl.after(spanEl);
        // containerEl.before(spanEl);

    }
    let newTitleEl = document.querySelector('.container h3');
    newTitleEl.innerHTML='Selected';
    newTitleEl.remove();

    let newLink = document.createElement('a');
    newLink.setAttribute('href', 'https://getbootstrap.com/');
    newLink.setAttribute('target', '_blank');
    newLink.setAttribute('id','top');
    newLink.setAttribute('class','link-el');
    newLink.innerText ='Bootstrap link';
    containerEl.after(newLink);

    let linkHrefValue = newLink.getAttribute('href');
    console.log(linkHrefValue);

    let btnEl = document.querySelector('button');
    let isDisabled = btnEl.hasAttribute('disabled');
    console.log(isDisabled);
    if(isDisabled){
        btnEl.removeAttribute('disabled');
    }
    newLink.setAttribute('class','link-el big-link');

    titleEl.setAttribute('style', 'background-color: red;');
    titleEl.style.cssText +='padding:50px;';

    let subTieleEl = document.querySelector('h2');
    subTieleEl.style.color ='green';
    subTieleEl.style.padding = '50px';
    subTieleEl.style.backgroundColor='black';
    subTieleEl.style.marginTop = '150px';
    // subTieleEl.
    // subTieleEl.setAttribute('class', 'm-0');
    console.log(subTieleEl.classList);
    subTieleEl.classList.add('big-link');
    subTieleEl.classList.add('decorate');
    subTieleEl.classList.add('test', 'm-0', 'new', 'test2', 'home', 'about');
    let modalEl = document.querySelector('.modal');
    modalEl.classList.remove('show');
    modalEl.classList.add('show');
    modalEl.classList.replace('show', 'modify');
    subTieleEl.classList.remove('m-0', 'new', 'test2', 'home', 'about');
    console.log(modalEl.classList.contains('modify'));
    if(modalEl.classList.contains('modify')){
        modalEl.classList.replace('modify','show');
    }
    document.querySelector('.btn').onclick = function(){
        modalEl.classList.toggle('show');
    }
}