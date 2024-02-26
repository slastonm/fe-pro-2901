// Spread
const firstArr = [1,2,3];
const secondArr = [4,5,6];
const thirdArr = [...firstArr, 7,8,9];
console.log([...thirdArr, ...secondArr]);

const user = {userName:'Tom', userAge:24};
const moreUser = {...user, email:'test@gmail.com', phone:'1234'};
console.log(moreUser);

// Rest

function numbersValue(...numberValue){
    return numberValue;
}

console.log(numbersValue(1,2,3,4,11, 12, 15));

// Math.min(1,2,45,3);
let numbersArr = [1,2,45,3];
console.log(Math.max(...numbersArr));

console.log(`User data${moreUser.email}`);

const {userName, userAge, email} = moreUser;

console.log(`User data new material: ${userName} ${userAge} ${email}`);

let [up, down, left, right, ...all] = ['UpKey', 'DownKey', 'LeftKey', 'RightKey', 'Test', 1, 2, 4, 'test value'];

// if(keyValue === keysNumber[0] )

console.log(`Array info ${up}, ${down}, ${left}`);
console.log(all);


const hero = {
    heroName:'Batman',
    realName:'Bruce',
    // suitColor: 'red'
}

const {heroName, realName, suitColor='black'} = hero;
console.log(`Hero info ${heroName} ${realName} ${suitColor}`);

const heroes =[
    { heroName:'Batman'},
    { heroName:'Joker'}
]

for(let {heroName} of heroes){
    console.log(heroName);
}

const modValues = heroes.map(({heroName})=>{
    return `This hero name ${heroName}` 
});

console.log(modValues);