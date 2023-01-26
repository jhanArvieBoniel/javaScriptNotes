//adding function to The web through DOM manipulating.
/* https://exampledomain.github.io/capture-data/index.html */
//use the link above to practice
console.log("dom manipulating putting click funtions")
var h1 = document.querySelector('h1')//select the variable 
//press enter
var arr = ['Example Domain','First Click','Second Click','Third Click']
//press Enter
function handleClicks() {//create a function and inside it you have the switch case
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}
//press Enter
h1.addEventListener('click', handleClicks);//put addEventListener to the element and with two parameters one is function.
//try it