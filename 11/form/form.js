window.onload = function(){
    let formEl = document.querySelector('form');
    // let userName = document.querySelector('#userName');
    let userName = document.querySelector('#userName');
    let userEmail = document.querySelector('#userEmail');
    console.log(formEl);
    [...formElements]=formEl.elements
    // formEl.addEventListener('submit', function(e){
    //     e.preventDefault();
    //     alert('Form submit');
    //     formElements.forEach(item=>{
    //         console.log(item);
    //         let pEl = document.createElement('p')
    //         pEl.innerHTML = item.value;
    //         formEl.after(pEl);
    //     })
    // })

    userName.addEventListener('blur', function(e){
        this.style.background ='green';
        
        // console.log(this.value.length <2);
        // if( this.value.length <2){
        //     alert('Type user name')
        // }
    });
    userName.addEventListener('focus', function(e){
        this.style.background = 'pink';
    });
    // userName.addEventListener('change', function(){
    //     console.log(this.value);
    // });
    function checkName(){
        if(userName.value === ''){
            alert('Type name');
        }
        else{
            alert('Your name corect');
        }
    }
    function checkEmail(){
        if(userEmail.value === ''){
            alert('Type email');
        }
        else{
            alert('Your email corect');
        }
    }
    formEl.addEventListener('change', function(){
        // alert('Form change');
        checkName();
        checkEmail();
        console.log(typeof userName.value);
    });
    formEl.addEventListener('submit', function(e){
        e.preventDefault();
        // checkName();
        // checkEmail();
        userEmail.value ='Hello';
        userName.value ='Heloo';
    });

}