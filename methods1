console.log("-----Built-it forEach Method-----")

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {//parameters always last the index
    console.log(`${index}. ${fruit}`)//output the index. values line by line
}
fruits.forEach(appendIndex);//built-in method called the function, 

console.log("------two ways of using forEach() in an array-----")

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {//built-in method with a function
    console.log(`${index}. ${veggie}`);//output the index. values line by line
});

console.log("----built-it filter() Method-----")
const nums = [0,10,20,30,40,50];
let example = nums.filter( function(num) {//will filter the asked condition or test just like a loop
    /* if(num > 20){
      console.log(num)
    } */
   return num > 20;//returned array value [30,40,50]
})
console.log(example);//made the line 18 a variable to able to output

console.log("-----built-in map() method-----");
//let newArr = []; longer way without map
let here = [0,10,20,30,40,50].map( function(num) {//map method will pass an array to another.  based on whatever work is performed inside the function that is passed-in to the map as a parameter.
    //newArr.push(num / 10); longer way without map
    return num / 10//will return an array [0,1,2,3,4,5]
})
//console.log(newArr); longer way without map
console.log(here);//I saved it as a function on line 28 to able to print out.

console.log("---Converting an object to an ARRAY-----")
const result = []; //an empty array to push the result
const drone = {//the given object
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone); //key is use to inherit the properties
droneKeys.forEach( function(key) {//forEach method that accept functions is use iterate on the object keys.
    result.push(key, drone[key])//(property, value) will push on the result variable. the drone is from the object and [key] is to check the value. and key is from the function
})
console.log(result) //["speed", 100, "color", "yellow"]

console.log("---- Map constructor: new Map() to object-----")
let bestBoxers = new Map();//Map in object is capital in function is map. using "new Map" the output will be an object.
bestBoxers.set(1, "The Champion");//.set is use for restoring data with two values
bestBoxers.set(2, "The Runner-up");//.set is use for restoring data with two values
bestBoxers.set(3, "The third place");//.set is use for restoring data with two values

console.log(bestBoxers);//console to see the result
bestBoxers.get(1); // 'The Champion' .get is use to get an specific value.

console.log("----- Set constructor: new Set()-----")
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple', "bayabas"];
const uniqueFruits = new Set(repetitiveFruits);// set it use to filter an array and get unique members. means output values is not repeated anymore.
console.log(uniqueFruits);// Set(4){"apple", "pear","plum", "bayabas",};