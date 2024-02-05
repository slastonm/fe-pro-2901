console.log('Product 1');
console.log('Product 2');
console.log('Product 3');
console.log('......');
// DRY don't repeat yourself
// window.onload = function(){
//     let count =1;
//     do{
//         // console.log(`Do while counter ${count}`);
//         let div = document.createElement('div');
//         div.innerHTML =`<h3>Poroduct</h3><p>Description</p><button>Buy</button>`;
//         document.body.appendChild(div);  
//         count++;
//     }while(count<150);

// }

// let whileCount = 0;
// while(whileCount<10){
//     console.log(whileCount);
//     whileCount++;
// }

for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(`Loop value ${i}`);
}

for(let i=0; i<4; i++){
    if(i==2){
        continue;
    }
    console.log(`Continue Loop value ${i}`);
}