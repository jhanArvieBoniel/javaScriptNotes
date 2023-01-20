console.log("--Spread Operator--");
let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican City"];
function showItinerary (place1, place2, place3){
  console.log("Visit" + place1);
  console.log("Then visit" + place2);
  console.log("Then visit" + place3);
}
showItinerary(top3[0], top3[1], top3[2],)//variable and indexes values from line 2 
showItinerary(...top3); // ... spread made it easy to call parameters in a function/array........The spread operator allows you to pass all array elements into a function without having to type them all individually.


console.log("----rest operator in an array-----");
const top7 = ["The Colosseum", "The Roman Forum", "The Vatican", "Trevi Fountain", "The Pantheon", "Piazza Venezia", "The Palatine Hill"];
const [] = top7;
const [first, second, third, ...secondVisit] =  top7//rest operator 4 new Variables are created. 3 strings and one last array
console.log(first);// new variable from line 15
console.log(second);//new variable from line 15
console.log(third);//new variable from line 15
console.log(secondVisit);// DESTRUCTURING by using ... spread on line 14, a new variable is created  with leftover values from top7 array.


console.log("----rest operator in a function-----");
function addTaxToPrices (taxRate, ...itemsBought){//...itemsBought is a sample of rest parameter it should always be in last. Two variables are created from the called line 25 (function stored in a variable)
  return itemsBought.map(item => taxRate * item);//variable array created by map is called and multiplied to another variable that is created. itemsBought.map is transfered as an item and used.
}

let shoppingCart = addTaxToPrices (1.1, 46, 69, 35, 79);//taxRate = 1.1 and rest of the values are multipled to taxRate. 
console.log(shoppingCart); //[50.6, 75.9, 38.5, 86.9];



console.log("----------REST and SPREAD ----------")
/* Using Spread and Rest
In this reading, you'll learn how to join arrays, objects using the rest operator. You will also discover how to use the spread operator to:

Add new members to arrays without using the push() method,
Convert a string to an array and
Copy either an object or an array into a separate object  */

console.log("---join together two arrays using Spread on variables---")
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate array using spread on variables.
console.log(fruitsAndBerries); // outputs a single array


console.log("---join together two arrays using Spread on objects---")
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}//used spread on objects
console.log(flyingCar) // {wings: 2, wheels: 4}


console.log("---Add new members to arrays without using the push() method---")
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];//rewrite the variable by using spread and more values. 
console.log(veggies);//a new array.


console.log("---Convert a string to an array using the spread operator---")
const greeting = "Hello";
const arrayOfChars = [...greeting];//using spread on a string will convert the string to an array
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']


console.log("--Copy either an object or an array into a separate one--");
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}//called and CREATE new variable from the properties and values of car1 using spread
car1.speed = 201 //modified the value of speed property.
console.log(car1.speed, car2.speed)//output the values of two variables.


console.log("---can copy an array into a completely separate array---")
const haha1 = ['apples', 'pears']
const haha2 = [...haha1]//spread is use to create new variable from an array copy the values
haha1.pop() //remove the last value in the array
console.log(haha1, "not", haha2)//result for different values output