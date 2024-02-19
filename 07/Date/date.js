// Date
let nowDate = new Date();
console.log(nowDate);

// let customDay = new Date(year,month, date, 12, 30, 40, 30)

let yearInfo =  new Date(2000, 0);
console.log(yearInfo);
// 0 - січень
// 1 - лютий
// 2 - березень
// 3 - квітень
// 4 - травень
// 5 - червень
// 6 - липень
// 7 - серпень
// 8 - вересень
// 9 - жовтень
// 10 - листопад
// 11 - грудень

let dayInfo = new Date(2001,1,1,12,30,20);
console.log(dayInfo);

let nowMethodDate = new Date();
console.log(`Day ${nowMethodDate.getDate()}`);
console.log(`Day in week ${nowMethodDate.getDay()}`);
console.log(`Year ${nowMethodDate.getFullYear()}`);
console.log(`Month ${nowMethodDate.getMonth()}`);
console.log(`Return string ${nowMethodDate.toDateString()}`);
console.log(`Return UTS string ${nowMethodDate.toUTCString()}`);
console.log(`Return json ${nowMethodDate.toJSON()}`);




