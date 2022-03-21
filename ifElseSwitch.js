/*let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny") {
    console.log("check again");
} 
else if (place == "Manc" && weather == "Rain") {
    console.log("Obvs");
} 
else {
    console.log("What is isn't raining?");
}
*/

//Activity 1
/*-------------------------------------------
let age = 21 ;
let country = "UK"

if (age > 17 && country == "UK" ) {
    console.log("Yes, I can serve you ")
} else {
    console.log("You aren't old enough")
}

---------------------------------------*/


//Activity 2 
/*------------------------------------------------------------------
let pizzaTopping = "mushrooms";

switch(pizzaTopping) {
    case "peppers":
        console.log("These are important ingredients for my pizza");
        break;
    
    case "mushrooms":
        console.log(`I don't mind having ${pizzaTopping} on my pizza`);
        break;

    default:
        console.log(`${pizzaTopping} should not be on a pizza`)
}

// Activity 2 switch version from gist

let topping = "pineapple";

switch(topping){
    case "pepperoni":
    case "pulled pork":
    case "salami":
    case "garlic":
        console.log("These are important ingredients for my pizza!");
        break;
    case "peppers":
    case "red onion":
    case "feta":
        console.log(`I don't mind having ${topping} on my pizza. `);
        break;
    default:
        console.log(`${topping} should not be on a pizza!`);
}
-----------------------------------------------------------------*/


//Activity 3 ------------------------------------------------------
/*
let password = "Ashton21"

if( password.length < 8) {
    console.log(`password is too short`);
} else {
    console.log( `${password}`)
}
--------------------------------------------------------------*/

/*
//Activity 4 --------------------------------------------------------
let num = 2 ;

if (num % 3 === 0 || num % 5 === 0) {
    console.log(`This number is divisible by 3 or 5`);
} else {
    console.log(`not divisible by 3 or 5`)
}

// // Switch Version from gist - activity 4
let num = 25;
switch(true) {
  case num % 5 == 0:
    console.log("This number is divisble by 5.")
    break;
  case num % 3 == 0:
    console.log("This number is divisble by 3.")
    break;
  default:
    console.log("This number is not divisble by 3 or 5.")
}
*/



//Activity 5 ----------------------------------------------------
/*
let num = 5;
if (num % 3 === 0 && num % 5 === 0) {
    console.log(`fizz buzz`);
} else if (num % 3 === 0) {
    console.log(`fizz`)
} else if (num % 5 === 0) {
    console.log(`buzz`)
} else {
    console.log(`not divisible by 3 or 5`)
}


// // Activity 5 switch version
let num = 15;

switch(true) {
  case num % 5 == 0 && num % 3 == 0:
    console.log("Fizz Buzz.")
    break;
  case num % 3 == 0:
    console.log("Fizz.")
    break;
  case num % 5 == 0:
    console.log("Buzz.")
    break;
  default:
    console.log("This number is not divisble by 3 or 5.")
}
----------------------------------------------------------------*/


//Activity 6 -- struggled on

/*
function checkPalindrome(number) {
    let num =  7007;

    for (let i = 0; i < num / 2; i++) {
        if (number[i] !== number[num - 1 - i]) {
            console.log("Not a palindrome")
        }
        else {
            console.log(`this is a palindrome`);
        }
    }
}

//broke the code down

let num = 1234;
let numToString = num.toString(); //this will convert num to strings = "1234"

//split() splits a string into an array of substrings, and returns the array: now num will be 1,2,3,4. > then we apply the The reverse() method reverses an array in place = 4,3,2,1 > then we apply The join() method creates and returns a new string by concatenating all of the elements = 4321

let reverseNumToStrings = numToString.split('').reverse().join('');

// then applied the if statement

if (num == reverseNumToString){
    console.log(`Yes ${num} is a palindrome`)
} else {
    console.log(`No ${num} is not a palindrome`)
}



// // Activity 6 -- answer
let num = 7261;
let numToString = num.toString(); 
let reverseNumToString = numString.split('').reverse().join('');

if (num == reverseNumString){
    console.log(`Yes ${num} is a palindrome`)
} else {
    console.log(`No ${num} is not a palindrome`)
}
 
*/


//Activity 7 ---------------------------------------------------
/*
let placeOfWork = "office";
let townOfHome = "Ashton";

let currentDate = new Date();
let hour = currentDate.getHours();

if(hour >= 16) {
    console.log(`I'm commuting`)
}  else if ( hour <= 8) {
    console.log(`I'm at home`);
} else if (hour >= 9) {
    console.log(`I'm at work`)
} else if (hour >= 17) {
    console.log(`chilling`)
}


// // Activity 7 - simple method-------------------------------
let time = 7;
let placeOfWork = "Manchester"
let townOfHome = "Golborne"

if (time == 8){
  console.log(`I am commuting to work in ${placeOfWork}`);
} else if (time == 7){
  console.log(`I am at home in ${townOfHome}`);
} else if (time == 9){
  console.log(`I am at work in ${placeOfWork}`)
} else {
  console.log(`If it is between 9 and 5 I am at work in ${placeOfWork}. Otherwise, I'm at home in ${townOfHome}`);
}

---------------------------------------------------------------*/



//Activity 8 
/*
let lastVowel = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

console.log(lastVowel.lastIndexOf("i"))


// // Activity 8 -- answer
let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
// counter go through whole array using length as limiter
for (let i = 0; i < vowelArr.length; i++){
//  console.log(string.lastIndexOf(vowelArr[i]));
// gets index of vowel in current iteration
    index = string.lastIndexOf(vowelArr[i]);
// compares current index to find highest index
if (index >= highestIndex ){
// so new highestindex becomes index
    highestIndex = index;
// won't reach last two nums in vowelarray
    lastVowel = vowelArr[i];
}
}
// This like logs the last Vowel to the console. 
console.log(lastVowel); 
// This line logs the index number of the last vowel. 
console.log(highestIndex)
*/






//Activity 9 
/*
let word = "anything";

let last = word.charAt(word.length - 1);

let first = word.charAt(0);

if( last === first) {
    console.log('true');
} else {
    console.log(false);
}


// // Activity 9 -- different method
let word = "ABBA";
if (word.charAt(0) == word.charAt(word.length-1)){
  console.log("True")
} else {
  console.log("False")
}
*/



//Activity 10 
/*
let num1 = 2;
let num2 = 3;

let numEqual = num1 + num2;

if (numEqual % 2 == 0) {
    console.log(numEqual)
} else {
    console.log(num1 * num2)
}
*/ 
