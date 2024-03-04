window.onload = function(){
    function showMessage(){
        alert('Hello user');
    }
    let alertMessage = setTimeout(showMessage, 5000);

    // setTimeout(()=>{
    //     alert('Hello second option');
    // }, 5000);
    let counter = 0;
    let intervalFn;
    function countFn(){
        counter++;
        document.querySelector('h1').innerHTML = `Count value: ${counter}`;
    }
    // setInterval(countFn, 1000);
    let startBtn = document.querySelector('.start');
    let stopBtn = document.querySelector('.stop');

    startBtn.onclick = function(){
       intervalFn = setInterval(countFn, 1000);
    }

    stopBtn.onclick = function(){
        // clearInterval(intervalFn);
        // document.querySelector('h1').innerHTML = `Count value: Stop`;
        clearTimeout(alertMessage);
    }

}