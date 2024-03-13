window.onload = function(){

    const countries = ["США", "Канада", "Франція", "Німеччина"];

    const countryInfo = [
        { name: "США", capital: "Вашингтон", population: "близько 331 мільйона" },
        { name: "Канада", capital: "Оттава", population: "близько 38 мільйонів" },
        { name: "Франція", capital: "Париж", population: "близько 67 мільйонів" },
        { name: "Німеччина", capital: "Берлін", population: "близько 83 мільйони" },
    ];
    let selectEl = document.querySelector('#country');
    countries.forEach(country=>{
        let option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        selectEl.appendChild(option);
    });
    selectEl.addEventListener('change', function(){
        let selectValue = this.value;
        let info = countryInfo.find(country=>country.name === selectValue);
        let containerEl = document.querySelector('.container');
        containerEl.innerHTML = `Столиця ${info.capital} населення: ${info.population}`;
    });

}