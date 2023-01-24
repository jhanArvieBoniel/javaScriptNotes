console.log("--javasript DOM modifying--")
//in the browser
const h2 = document.createElement('h2')//declare the element by declaring a variable then press enter in the broweser
h2.innerText = "This is an h2 heading inserted from browser"//adding text in the created element
//'This is an h2 heading'
h2.setAttribute('id', 'sub-heading') //putting id="sub-heading" on the element

h2.setAttribute('class', 'secondary')// putting class="secondary" on the element
h2 //<h2 id="sub-heading" class="secondary"> this in an h2 heading</h2>

document.body.appendChild(h2)//entering will output the string value in the web.
document.querySelector('p')//entering this will output the element on the console. Can put the other element
document.querySelectorAll('p')//will show the the p elements
document.getElementById('heading')//will call elements with id value heading
document.getElementByClassName('sub-heading')//will call elements with id value heading class value sub-heading
const target = document.querySelector('h2')//select the element
function handleClick (){
  console.log('clicked the h2 hehe')
}//entering will create a function
target.addEventListener('click', handleClick)//entering will called the function
function handleClick2(){//created function and elements can also be edited on the Elements TAB in the browser by adding onclick="handleClick2()"
  console.log('clicked the heading')
}