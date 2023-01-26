console.log("--Translating JSON to Javasript and vise-versa--")
//this should be work on WEBSITE console.
console.log("from JSON to Object")
'{"greeting": "hello"}'//JSON file sample. press enter.
const jsonStr'{"greeting": "hello"}'//declare the JSON to be a variable.
JSON.parse(jsonStr)//This will output as javasript object property and string
const aPlainObj = JSON.parse(jsonStr)//declare it as a variable.
aPlainObj.greeting = 'hi' //modified the value of the property
aPlainObj //{greeting: 'hi'}

console.log("from Object to JSON")
const data = {//here is an object.press ENTER on console.
  firstName: "John",
  lastName: "Doe",
  greeting: "Hello"
}
JSON.stringify(data)//enter and the REsult will be a JSON string