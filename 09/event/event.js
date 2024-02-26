window.onload = function(){
    let helloBtn = document.querySelector('.hello');
    helloBtn.onclick = function(){
        alert('Hello');
        // count+=1;
        // pEl.innerHTML = `Counter <strong>${count}</strong>`
    }
    let listnerBtn = document.querySelector('.listner');
    let count = 0;
    let pEl = document.querySelector('p');
    listnerBtn.addEventListener('click', function(){
        count+=1;
        pEl.innerHTML = `Counter <strong>${count}</strong>`
    });
    listnerBtn.addEventListener('mouseover', function(){
        pEl.innerHTML = `Mouseover`;
    });
    function displayAlert(){
        alert('Test work');
    }
    let testBtn = document.querySelector('.testBtn');
    testBtn.addEventListener('click', displayAlert);

    let removeBtn = document.querySelector('.removeTest');
    removeBtn.addEventListener('click', function(){
        testBtn.removeEventListener('click', displayAlert);
        alert('Event removed');
    });
    let titleEl = document.querySelector('h1');
    let baseFontSize = 24;
    console.log(titleEl);
    titleEl.onclick = function(){
        // console.log(`Element this ${this}`);
        // console.log(this);

        baseFontSize+=5;
        this.style.fontSize = `${baseFontSize}px`;
    }
    let [...allLi]=document.querySelectorAll('li');
    // allLi.forEach(li=>{
    //     li.onclick=function(){
    //         this.innerText = 'Change js';
    //         this.style.background = 'yellow';
    //     }
    // });
    // for(let i=0; i<allLi.length; i++){
    //     allLi[i].onclick = function(){
    //         this.style.background ='gray';
    //     }
    // }
    let linkEl = document.querySelector('a');
    linkEl.addEventListener('click', function(event){
        console.log(event);
        event.preventDefault();
        // alert('Link work');
    });

    let ulEl = document.querySelector('ul');
    ulEl.onclick = function(e){
        console.log(e.target);
        console.log(`Target info ${e.target.classList}`);
    }
}