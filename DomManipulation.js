console.log("--javasript DOM modifying--")
//in console of the browser the browser
const h2 = document.createElement('h2')//declare the element by declaring a variable then press enter in the broweser
h2.innerText = "This is an h2 heading"//adding text in the created element
//'This is an h2 heading'
h2.setAttribute('id', 'sub-heading') //putting id="sub-heading" on the element

h2.setAttribute('class', 'secondary')// putting class="secondary" on the element
h2 //<h2 id="sub-heading" class="secondary"> this in an h2 heading</h2>

document.body.appendChild(h2)//entering will output the string value in the web.