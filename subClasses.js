class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train { //Train as Super-class and HighSpeedTrain as sub-class
    constructor(passengers, highSpeedOn, color, lightsOn) { //two properties added to HighSpeedTrain class
        super(color, lightsOn); //super is use to clasify what property gets inherited from the super class in th sub-class. in this case bot of properties.
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() { //to reverse the value of property from subclass
        this.highSpeedOn = !this.highSpeedOn; //! is use to reverese a property from subclass
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths(); //called from line 6
        super.lightsStatus(); //called from line 9
        console.log('Lights are 100% operational.'); //re-implemented toggleLights() method, namely:
    }
}
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype();
console.log("------train5------")
var train5 = new Train('blue', false); //train5 object from Train class, set its color "blue" and its lightsOn false.
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false); // highSpeed1 object to the HighSpeedTrain class, setting passengers to 200, highSpeedOn to false, color to "green", and lightsOn to false.
train5.toggleLights(); // undefined //from line 37
train5.lightsStatus(); // Lights on? true //from line 37
train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.