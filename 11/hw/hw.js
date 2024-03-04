window.onload = function(){
    let posX = 0;
    let posY = 0;
    let moveStep = 10;
    function moveEl(el){
        el.style.top = `${posY}px`;
        el.style.left = `${posX}px`;
    }
    let objectEl = document.querySelector('.moveBlock');
    document.addEventListener('keydown', function(event){
        console.log(event.key);
    // ArrowRight hw.js:5:17
    // ArrowLeft hw.js:5:17
    // ArrowUp hw.js:5:17
    // ArrowDown
        switch(event.key){
            case 'ArrowUp':
                posY-=moveStep;
                break;
            case 'ArrowDown':
                posY+=moveStep;
                break;
            case 'ArrowLeft':
                posX-=moveStep;
                break;
            case 'ArrowRight':
                posX +=moveStep;
                break;
        }
        moveEl(objectEl);
    });
}