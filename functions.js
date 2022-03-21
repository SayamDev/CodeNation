
/*
                    //these are parameters
 const cashWithdrawal = (amount, accnum) => {
     console.log(`withdrawing ${amount} from account ${accnum}`);


 }

 cashWithdrawal(300, 122345);
 cashWithdrawal(30, accnum);
 cashWithdrawal(3, 1224225);//these are arguments

*/



/*
const addUp = (num1, num2) => {
    return num1 + num2;
}

console.log(addUp (7,3)); //we have to call the argument
*/

/*
let coffeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeIsGrinding) {
        console.log("Stop grinding")
    } else {
        console.log("start grinding")
    }
}

pressGrindBeans();
*/


//Activity 1 -------------------------------

/* old version
function factorial (n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));


//converted to arrow function
const factorial = (n) =>  {
    if ( ((n === 0)) || (n === 1) ) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(1));

-----------------------------------------------*/






//Activity 2--------------------------------------

/*
let orderCount = 0

const takeOrder = (topping1,topping2) => {
   orderCount++ // now this will increment whenver takeOrder is called upon
   console.log(orderCount)

return  `Pizza with ${topping1} and ${topping2}`;
}

console.log(takeOrder("pineapple", "chicken"))
console.log(takeOrder("pineapple", "chicken"))
console.log(takeOrder("pineapple", "chicken"))
console.log(takeOrder("pineapple", "chicken"))

//this will show 4 pizza with pineapple and chicken

-----------------------------------------------------*/



//Activity 3---------------------------------------------

/*

let pin = 1234;
let checkPin = typeof(pin);
let balance = 500

console.log(checkPin)

if (checkPin === 'number' && pin === 1234 && balance >= 500) {
    console.log(`Your pin number is correct and you have ${balance} to witdraw`)
 } else {
     console.log(`wrong pin`)
 };
*/



 

