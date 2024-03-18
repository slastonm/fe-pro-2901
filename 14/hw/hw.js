window.onload = function(){
    let btnEl = document.querySelector('button');
    // let inputEl
    function checkPassword(value){
        // let lengthRegex = /^.{8,20}$/;
        // let upperCaseRegex = /[A-Z]/;
        // let lowerCaseRegex = /[a-z]/;
        // let digitRegex = /[0-9]/;
        // let specialSymbolRegex = /[!@#$%&*]/;
        
        // console.log(`length ${lengthRegex.test(value)}`);
        // console.log(`upperCase ${upperCaseRegex.test(value)}`);
        // return lengthRegex.test(value) && upperCaseRegex.test(value) && lowerCaseRegex.test(value) && digitRegex.test(value) && specialSymbolRegex.test(value);
        let testPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,20}$/;
        return testPassword.test(value);

    }
    btnEl.onclick = function(){
        let inputnValue = document.querySelector('input').value;
        if(checkPassword(inputnValue)){
            alert('!!!!  Password valid !!!!!')
        }
        else{
            alert('invalid password');
        }
    }
}