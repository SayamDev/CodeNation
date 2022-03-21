//Activity 1---------------------------------------
/*
let person = {

     name: "sayam",
     age: 24,
     favSong: 
         [
            "Smooth - michael"  ,
            "hello - adele",
            "friday - rebbeca black"
         ],

         sayHi() {
             if (this.name) {
                 return `Hello my name is ${this.name}`
             }
         }
};


console.log(person.sayHi());

------------------------------------------------*/





//Activity 2------------------------------------

/*

let myPet = {
    name: "Rio",
    typeOfPet: "Cat",
    age: 3,
    colour: "Ginger",
    eat: 
    function() { {
            return `${this.name} is eating`  // 
        }
    },

    drink: 
    function() { {
            return `${this.name} is drinking`
        }
    }

};


console.log(myPet.eat())
console.log(myPet.drink())


----------------------------------------------------*/


//Activity 3 ---------------------------------------------
/*
const coffeeShop = { //object
    branch: "Sayam's Caffe", //branch key

        drinks: [ //drink 
            ["Capuccino", 1.50],
            ["Espresso", 2.00],
            ["Hot Choclate", 1.50],
            ["latte", 2.10]], 

        food: [ //food 
            ["Cup cake", 1.20],
            ["Muffin" , 1.00],
            ["Cake slice", 3.10],
            ["Croissont", 1.10]
        ],

        drinksOrdered() {
            let drinkArrayPlaceholder = []; // this variable will act as a placeholder for drinks
            let drinkCost = 0;

            //for loop breakdown: 1) > this.drink.length = allows us to access the drinks object (this method), then will show us the values from inside it (in this case it's strings and numbers).  2) > drinkArrayPlaceholder.push(this.drinks[i][0] - the push method will allow us to add the data from the drinks array which then we (have to use method: ("this") js method, to access inside an object) then [i][0] this indiactes that we are getting the 1st (which equals 0 in the array) argument from the data object =which are the strings. 3)> drinkCost += this.drinks[i][1]; = this is just adding all the 2nd argument in the drinks object which are the numbers.[1]
            for(let i = 0; i < this.drinks.length; i++ ) {  
                drinkArrayPlaceholder.push(this.drinks[i][0]);
                drinkCost += this.drinks[i][1];
            }
            return `We welcome you at ${this.branch},\nYour order is: ${drinkArrayPlaceholder.join(",")}.\nTotal price: £ ${drinkCost.toFixed(2)}`;
        },
        foodOrdered() {
            let foodArrayPlaceholder = [];
            let foodCost = 0;
            for(let i = 0; i < this.food.length; i++) {
                foodArrayPlaceholder.push(this.food[i][0]);
            foodCost += this.food[i][1];
            }
            return `We welcome you at ${this.branch},\nYour order is: ${foodArrayPlaceholder.join(",")}.\nTotal price: £ ${foodCost.toFixed(2)}`;
            
        },
        

    }

    console.log(coffeeShop.drinksOrdered()); 
    console.log(coffeeShop.foodOrdered());
*/


/*



//Alarm task---------------------------------


/*
let day = "sunday";

const alarmClock = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
}

if(day == "saturday" || day == "sunday") {
    alarm = alarmClock.weekendAlarm;
    console.log(`hello sayam: ${alarm}`)
} else {
    alarm = alarmClock.weekdayAlarm;
    console.log(`hello sayam: ${alarm}`)
}
//--------------------------------------
*/














