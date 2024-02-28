window.onload = function(){
    let isTunel = false;
    // let isTunel = true;

    let firstEl = document.querySelector('.first');
    let secondEl = document.querySelector('.second');
    let thirdEl = document.querySelector('.third');

    firstEl.addEventListener('click', function(e){
        
        this.style.backgroundColor = 'green';
        alert('1');
        e.stopPropagation();
    }, isTunel);
    secondEl.addEventListener('click', function(e){
       
        this.style.backgroundColor = 'orange';
        alert('2');
        e.stopPropagation();
    }, isTunel);
    thirdEl.addEventListener('click', function(e){
        // e.preventDefault()
        e.stopPropagation();
        this.style.backgroundColor = 'red';
        alert('3');
        // e.stopPropagation();
    }, isTunel);
}