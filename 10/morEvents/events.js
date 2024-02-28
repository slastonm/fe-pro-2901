window.onload = function(){
    let divMouse = document.querySelector('.mouse');
    let infoSpan = document.querySelector('.mouse span');
    // divMouse.addEventListener('mousedown', function(){
    //     infoSpan.innerHTML = 'Mousedown'
    // });
    // divMouse.addEventListener('mouseup', function(){
    //     infoSpan.innerHTML = 'MouseUP';
    // });

    divMouse.addEventListener('click', function(event){
        console.log(event);
        infoSpan.innerHTML = `
            ctrlKey ${event.ctrlKey} <br>
            shiftKey ${event.shiftKey} <br>
            altKey ${event.altKey}
        `
    });

    let hoverjsEl = document.querySelector('.hoverjs');
    let hoverjsSpan = document.querySelector('.hoverjs span');
    hoverjsEl.addEventListener('mouseover', function(){
        hoverjsSpan.innerHTML ='Курор над елементом';
        this.style.background = 'green';
        divMouse.style.background = 'orange';
    });
    hoverjsEl.addEventListener('mouseout', function(){
        hoverjsSpan.innerHTML ='Курор покинув елемент';
        this.style.background = 'lawngreen';
        divMouse.style.background = 'lawngreen';

    });
    let phoverEl = document.querySelector('.hoverjs p');
    hoverjsEl.addEventListener('mousemove', function(e){
        phoverEl.innerHTML = `${e.type} <br> cordinate<br>
        ${e.clientX} and ${e.clientY}<br>
        ${e.pageX} and ${e.pageY} <br>
        ${e.offsetX} and ${e.offsetY}`
        ;
    });
    let textAreaEl = document.querySelector('textarea');
    // textAreaEl.addEventListener('contextmenu', function(e){
    //     e.preventDefault();
    //     alert('click');
    // });
    //keydown
    //keyUp
    //keypress
    let textInfoEl = document.querySelector('.textinfo');
    textAreaEl.addEventListener('keypress', function(event){
        textInfoEl.innerHTML=`
        ${event.key} code ${event.code} <br>
        ${event.shiftKey} shift info <br>
        ${event.altKey} alt info <br>
        ${event.ctrlKey} ctrl info 
        `;
    });
    // document.addEventListener('keydown', function(e){
    //     console.log(e);
    // })
    window.addEventListener('scroll', function(){
        let scrollPostion = window.scrollY;
        console.log(scrollPostion);
        if(scrollPostion>500){
            document.querySelector('body').style.background = 'blue';
        }
        if(scrollPostion>800){
            document.querySelector('body').style.background = 'yellow';
        }
    });
    textAreaEl.addEventListener('copy', function(e){

        alert('copy done');
        e.preventDefault();
        // лЮЕ1Б,./#]d

    });
    textAreaEl.addEventListener('paste', function(e){
        alert('Вставка текста заборонена');
        e.preventDefault();
    });
}