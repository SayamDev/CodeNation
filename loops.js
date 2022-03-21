//Array Syntax
/*
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

console.log(coffeeOrder);

coffeeOrder[1] = "Sayam = Hot Choclate";
console.log(coffeeOrder);
coffeeOrder.push("Ajmal - Latte");
console.log(coffeeOrder);
coffeeOrder.pop();
console.log(coffeeOrder);
*/

//Array Activities---------------------------------------------
//Activity 1 ---------------------
/*
let favSong = [
    "kiss me through the phone",
    "Smooth",
    "I Gotta Feeling"
]

console.log(favSong);

favSong.push("Macarena");
favSong.push("How Do I Live");
console.log(favSong);

favSong.pop()
console.log(favSong);
*/


//Activity 2 ----------------------
/*
let favSong = [
    "kiss me through the phone",
    "Smooth",
    "I Gotta Feeling"
]

favSong.shift()
console.log(favSong);
*/
//------------------------------------------------------





//Loops-------------------------------------------------
/*
let favDrinks = [
    "coke",
    "fanta",
    "sprite",
    "Red Bull"
];

for (let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i]);
}

*/
/*
let multiplesTwo = [];

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        multiplesTwo.push(i);
    }
}

console.log(`Number*/

/*
let age = 15;

while (age < 18) {
    console.log("You are a child");
    age ++
}
console.log("you are an adult")
*/


/*
let cards = ["Diamon", "Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade") {

    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];

}

console.log(currentCard);

*/












//Loop Activities--------------------------------------------

// Activity1 --------------------------------------
/*
let favFilms = [
    "Interstellar",
    "Django Unchained",
    "inglorious bastards",
    "Joker",
    "Her"
]

favFilms.push("Hateful Eight", "Spiderman");


for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
}

--------------------------------------------------------*/





// Activity2 ------------------------------------
/*
let random = Math.floor(Math.random() * 50) + 1;

console.log(random);

---------------------------------------------------*/



// Activity3 ------------------------------------
/*
let i ;
for (i = 0; i < 10; i++) {
    console.log(i)
}

//this will show a loop from 0 to 9 on the screen


//this will show a loop from 9 to 0 on the screen

let i ;
for (i = 9; i > 0; i--) {
    console.log(i)
}

----------------------------------------------------*/




//Activity 4---------------------------------------------
/*
let films = [
    "Django",
    "Interstellar",
    "Spiderman",
    "Batman"
];

for (let i = 0; i < films.length; i++ ) {
     console.log(films[i]); //this shows each film in the array
 } 
    if(films[2] =="Ghostbusters") { //will show 3rd film the array
        console.log("Yay it's Ghostbusters")
    } else {
        console.log(`Boo! we want Ghostbusters!`)
    }
---------------------------------------------------------*/



//Activity 5 --------------------------------------
/*
for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 30)

    if(randomNum % 7 ==0) {
        console.log(`${randomNum} is divisible by 7`);
    } else {
        console.log(`${randomNum} not disvisible by 7` )
    }
}
*/

//array version - activity 5
/*
let number = [];

for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 30)

    if (randomNum % 7 == 0) {
        number.push(`${randomNum} is divisible by 7! `)
    } else {
        number.push(`${randomNum} not divisible by 7 `)
    }
}

console.log(number)
-----------------------------------------------*/







//Activity 6 ------------------------------------------


/*
let bobsFollowers = ["Alex", "Jo", "Jill", "KC"];
let hannahsFollowers = ["Alex", "Jo", "Jimbo", "CJ"];

let sameFollowers = [];


for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) {
            console.log(`Followers that follow Bob and Hannah: ` + bobsFollowers[i])
            sameFollowers.push(bobsFollowers[i]); // this will push the for loop answer into the sameFollowers variable
        }
    }
}

console.log(sameFollowers);
--------------------------------------------------------*/



//Activity 7-----------------------------------------

//while loops--------initally checks for the condition first then > executes the code block---------------
/*
let loading = 0;

while (loading < 100) {
    console.log("Website is still loading"); // this will create an infinite loop since it loading is less < 100 / therefore we have to add the increment operator to the loading variable; now loading will be incremeneted by 1 until it reaches 100.

    loading++
}
*/


//do..while loops----does a task once and then keeps doing it until a  specified condition is  met----------------------

//Do while Loop > executes the block > then checks for the condition


//the code below will run and print out  10 - because i is greater than  5, 

/*
let countString = '';
let i = 10;

do {
    countString =countString + i;
    i++
} while (i < 5);

console.log(countString)

*/
