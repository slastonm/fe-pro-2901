function playGame(){
    let options = ['Камінь','Ножниці', 'Папір'];
    let computerChoise = options[Math.floor(Math.random()*3)] // 1.1234
    let userChoise = prompt('Оберіть одне значення'); //.trim() , toUpercasse()
    if(!options.includes(userChoise)){
        alert(`${userChoise} не відподає правилам гри`);
        return;
    }
    console.log(`Вибір користувача ${userChoise} vs ${computerChoise}`);
    if(computerChoise === userChoise){
        alert('Hічия!');
    }
    else if(
        (userChoise == 'Камінь' && computerChoise === 'Ножниці') || 
        (userChoise == 'Ножниці' && computerChoise === 'Папір')|| 
        (userChoise == 'Папір' && computerChoise === 'Камінь')){
        alert('Ви виграли');
    }
    else{
        alert('Ви програли');
    }
}
playGame();