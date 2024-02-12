let myObj = new Object(); // пустий обєкт new Array(100)
let simple = {}// пустий обєкт
console.log(myObj);
console.log(simple);

let workLaptop = {
    model:'apple',
    ram:'16gb',
    memory:512,
    acesuars: ['mouse', 'keybord'],
    isWork:true,
    // info:function(){
    //     console.log(`${workLaptop.model} ram:${workLaptop.ram}`);
    // }
    info:function(){
        console.log(`${this.model} ram:${this.ram}`);
    }
}

console.log(workLaptop);
console.log(`Console.log call info ${workLaptop.model} ram:${workLaptop.ram}`);
workLaptop.info();

workLaptop.processor = 'm2';
workLaptop.color = 'silver';

console.log(workLaptop);

data = ['01.01.2024', '01.02.2024', '01.02.2024']
let articles = [
    {
        title:'News about Ukraine',
        text:'Lorwm ipsum',
        publicData:'01.01.2024'
    },
    {
        title:'News 2 about Ukraine',
        text:'Lorwm ipsum'
    },
    {
        title:'News 2 about Ukraine',
        text:'Lorwm ipsum'
    }
];
let objKeys = ['color', 'ram'];
console.log(`Dynamic key ${workLaptop['color']}`);

objKeys.forEach((item)=>{
    console.log(`Dynamic key ${workLaptop[item]}`);
});

delete workLaptop.model;
delete workLaptop.memory;

console.log(workLaptop);