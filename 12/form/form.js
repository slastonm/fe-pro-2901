window.onload = function(){
    let checkboxEl = document.querySelector('#checkboxEl');
    console.log(checkboxEl.checked);
    if(checkboxEl.checked){
        // alert('Login!')
    }
    else{
        // alert('Check checkbox');
    }
    let selectedRadioBtn = document.querySelector('input[name="option"]:checked');
    let selectRadio = selectedRadioBtn ? selectedRadioBtn.value :'Hічого не вибрано';

    console.log(selectRadio);

    let [...allRadio] = document.querySelectorAll('input[type="radio"]');

    console.log(allRadio);
    for(let radio of allRadio){
        if(radio.checked){
            console.log(radio.value);
        }
    }
    let selectEl = document.querySelector('select');
    console.log(selectEl.value);
    selectEl.addEventListener('change', function(){
        alert(`${this.value}`);
    });
}
    // 1. Task Manager -  Trello
        // форма входу
          // валідація 
        // список задач
        // створення задчі
        // редагування задчі
        // видалення задчі 
        // запити
        // форма регістрації
        // налаштування користувача
    // 2. Домашняя бухгалтерия: учет расходов и доходов, планирование бюджета

    // 3. Клиент банк: эмуляция онлайн банкинга
    // 4. Почтовый сервер: эмуляция почтового приложения, интеграция со сторонними почтовыми службами
    
    // 5. Интернет магазин (любая тематика)
    // 6. Симулятор торговли акциями или криптовалютами
    // 7. Агрегатор новостей или товаров с разных сайтов (минимум 3-4)
    // 8. Форум для общения
    // 9. Удаленный диск (упрощенный аналог Google Disk или Dropbox)
    // 10. Фото или видео хостинг
    // 11. Чат бот
    // 12. Можно предложить свою тему.
