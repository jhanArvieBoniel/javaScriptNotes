export const informalGreeting = (person) => { //exporting this to modules.html
    console.log(`Hello, ${person}`);
}

export const formalGreeting = (person) => { //exporting this to modules.html
    console.log(`Good day, ${person}`);
}

const greeting = () => { //variable declared as a function
    console.log(`Howdy!`);
}

export default greeting; //curly brackets wont required on the import file because of default