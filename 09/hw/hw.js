window.onload = function(){
    function randomColor(){
        // rgb(231, 226, 226)
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    function createDivs(number){
        const containerEl = document.createElement('div');
        containerEl.style.display = 'flex';
        containerEl.style.flexWrap = 'wrap';
        containerEl.style.gap = '10px';

        for(let i=0; i<number; i++){
            const div = document.createElement('div');
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.borderRadius = '100%';
            div.style.background = randomColor();
            div.className='innerDiv';
            containerEl.appendChild(div);
        }
        document.body.appendChild(containerEl);
    }
    createDivs(10);

    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },
        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },
        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }
    ];

    let tableTbody = document.querySelector('.myTable tbody');
    console.log(tableTbody);
    function tdEl(content){
        let td = document.createElement('td');
        td.innerText = content;
        return td;
    }
    booksArray.forEach(book=>{
        let trEl = document.createElement('tr');
        // trEl.innerHtml = `
        // <td>${book.title}Hello</td>
        // <td>${book.year}</td>
        // <td>${book.rating}</td>`;

        // trEl.appendChild(tdEl(book.title));
        // trEl.appendChild(tdEl(book.year));
        // trEl.appendChild(tdEl(book.rating));
        for (let key in book){
            trEl.appendChild(tdEl(book[key]));
        }
        tableTbody.appendChild(trEl);
    });
    let now = new Date();
    console.log(now);
    console.log(now.getTime());
    console.log(`${new Date(1708968432869)}`);
    function addDay(date, days){
        const miliseconds = 24*60*60*1000;
        const nextDay = date.getTime() +days*miliseconds;
        return new Date(nextDay);   
    }
    console.log(addDay(now, 2));

}