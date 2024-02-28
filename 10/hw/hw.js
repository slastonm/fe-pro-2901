window.onload = function(){
    const counterBtn = document.querySelector('.counter');
    const counterContainer = document.querySelector('.count-container');
    let count = 0;
    function icreaseCount(){
        count+=1;
        counterContainer.textContent = count;
        if(count>=10){
            counterBtn.removeEventListener('click', icreaseCount);
            counterBtn.setAttribute('disabled','disabled');
        }
    }
    counterBtn.addEventListener('click', icreaseCount);

    let [...allItemsButtons] = document.querySelectorAll('.div-item button');
    allItemsButtons.forEach(button=>{
        button.onclick = function(){
            button.parentElement.remove();
        }
    });

    let [...allDivs] = document.querySelectorAll('.div-item');

    allDivs.forEach(div=>{
        div.onclick = function(){
            div.remove();
        }
    });

    allDivs.forEach(div=>{
        div.onclick = function(){
            this.remove();
        }
    });


}