console.log("---creating h1 and input ELEMENTS and change the h1 depending on the inputed string to DOM"---)

var h1 = document.createElement('h1')//create an element
h1.innerText = "Type into the input to make this text change"//put innertext in the h1 element

var input = document.createElement('input')//create an input element
input.setAttribute('type', 'text')//set attribute with type="text"

document.body.innerText = '';//made the body black
document.body.appendChild(h1);//called the h1
document.body.appendChild(input);//called the input

input.addEventListener('change', function() {//add an eventListener that will change the value of h1 everytime you put a value in the input
    h1.innerText = input.value
})