/*const firstName = "Sayam"; 

const secondName = "Ajmal"; // is used for declaring a value that cannot be changed 

let age = 24;  // let is used for declaring a value that CAN be changed


var dontUseit = "hello"; // is legace code  - dont use it


let i = 10;
console.log(i);
i = i + 2;
console.log(i);

*/


/*
let favDrink = "coffee";
console.log(`my favourite drink is ${favDrink}`);

*/



//Activity 1------------------------------------------------------------
/*
const myName = "Sayam";
let age = 24;
let favouriteColour = 'black';

console.log(`My name is ${myName}, I am ${age} years old, my favourite colour is ${favouriteColour} `  );

age = 25;
favouriteColour = 'red';
console.log(`My name is ${myName}, I am ${age} years old, my favourite colour is ${favouriteColour} `  );

---------------------------------------------------------------------*/


//Activity 2-------------------------------------------------------------
/*
let breakfast = "cornflakes";
let lunch = "tuna sandwich";
let dinner = "fish and chips";
//let eatToday = breakfast + lunch + dinner;
console.log(`For breakfast I ate ${breakfast}, then after that I ate ${lunch} for lunch, then at the end I had ${dinner} `  );

//eat for tommorow

breakfast = "porridge";
lunch = "chicken sandwich";
dinner = "noodles";

console.log(`Tommorow For breakfast I ate ${breakfast}, then after that I ate ${lunch} for lunch, then at the end I had ${dinner} `  );
---------------------------------------------------------------------*/


//Activity 3 - --------------------------------------------------- create  a program that calculates the number of days from today to your birthday

/*
let birthday = new Date ("01/05/1998");
let todayDate = new Date ("03/15/2022");

let differenceInTime = todayDate.getTime() - birthday.getTime();

let differenceInDays = differenceInTime / (1000 * 3600 * 24);

console.log(differenceInDays); 


//solution
// To set two dates to two variables. We have to use the Date Object.
const birthDay = new Date("2022,11,05")
const todaysDate = new Date("2022, 02, 15");
// This calculates the difference but IN milliseconds.
let diffInTime = birthDay.getTime() - todaysDate.getTime()
// To convert that to days we use this calculation.
let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
// Finally, it is console logged out here using string template literals. 
console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`);
console.log(`Your birthday is in: ${diffInDays} days.`)
-----------------------------------------------------------------*/







// // Activity 4 - create 9 variables : space1, space 2 ....space9 > assign either the value 'X','O' to each of these variables. > insert the variables into your board using the ${varName} syntax and make it look like the displayed board.
/*
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let i = "    |   ";
let j = "-----------------------";

console.log (`${space0}${i}${space0}${i}`);
console.log (`${space1}${i}${space2}${i}${space3}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space4}${i}${space5}${i}${space6}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space7}${i}${space8}${i}${space5}${space9}`);
console.log (`${space0}${i}${space0}${i}`);

//-------------------------------------------------------------------
*/