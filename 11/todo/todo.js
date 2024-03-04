window.onload=function(){
    let form = document.querySelector('form');
    let inputEl = document.querySelector('#button-addon2');
    let listGroup = document.querySelector('.list-group');
    function createListEl(userValue){
        let item = document.createElement('li');
        item.classList.add('list-group-item');
        let dateCreate = new Date().toTimeString();
        item.innerText = `${userValue} time: ${dateCreate}`
        return item;
    }
    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(inputEl.value.length === 0){
            console.log(this);
            inputEl.classList.add('bg-danger');
        }
        else{
            listGroup.appendChild(createListEl(inputEl.value));
            inputEl.value = '';
            if(inputEl.classList.contains('bg-danger')){
                inputEl.classList.remove('bg-danger');
            }
        }
    });
}