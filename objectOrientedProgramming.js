class Animal {
  constructor(color = "yellow", energy = 100){ //w/ values
    this.color = color;
    this.energy  = energy;
  }
  isActive (){ //Prototype Method
    if (this.energy > 0){
      this.energy -= 20;//from line 3
      console.log("Energy is decreasing, currently at:", this.energy)
    } else if (this.energy == 0){
      this.sleep();
    }
  }
  sleep(){ //Prototype Method
    this.energy += 20;//from line 4
    console.log("energy is increasing, currently at:", this.energy)
  }
  getColor(){ //Prototype Method
    console.log(this.color)//from line 3
  }
}

class Cat extends Animal { // 1st sub-class from line 1
  constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color, energy){
    super(color,energy); //from Prototype line 1
    this.sound = sound;//property
    this.canClimbTrees = canClimbTrees;//property
    this.canJumpHigh = canJumpHigh;//property
  }
  makeSound(){//method
    console.log(this.sound);
  }
}

class Bird extends Animal { //1st sub-class from line 1
  constructor(sound = "chirp", canFly = true, color, energy){
    super(color, energy);//from Prototype line 1
    this.sound = sound;//property w/ value
    this.canFly = canFly;//property w/ value
  }
  makeSound(){ //method
    console.log(this.sound);//line 38
  }
}

class HouseCat extends Cat { //2nd sub-class. from line 22.
  constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy){
    super (sound,canJumpHigh, canClimbTrees, color, energy);//from Cat subClass1 line 23 and Prototype line 1
    this.houseCatSound = houseCatSound;//property w/ value
  }
  makeSound(option){
    if(option){
      super.makeSound();//from Cat subClass line 30. 
    }
    console.log(this.houseCatSound);
  }  
}

class Tiger extends Cat { //2nd sub-calss from line 22
  constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy){
    super(sound, canJumpHigh, canClimbTrees,color, energy);//from Cat subClas1 line 23 and Prototype line 1
    this.tigerSound = tigerSound;//property w/ value
  }
  makeSound(option){
    if(option){
      super.makeSound();//from Cat subClass line 23.
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird { //2nd subclass from line 35
  constructor(canTalk = false, sound, canFly, color, energy){
    super(sound, canFly, color, energy);//from Bird subClass1 line 35 and Prototype line 1
    this.canTalk = canTalk; //property
  }
  makeSound(option){
    if (option){
      super.makeSound(); //from Bird subclass1 line 41.
    }
    if(this.canTalk){//property boolean
      console.log("I'm a talking parrot1");
    }
  } 
}

let polly = new Parrot(true);//passing `true` to the constructor line 73 so that polly can talk. 
let fiji = new Parrot(false); //passing `false` to the constructor line 73 so that fiji can't talk.

polly.makeSound();//("chirp", I'am a talking parrot!) let 87, "line 79", boolean true from line 82.
fiji.makeSound();//("chrip") let 88, boolean false from line 79.

polly.color;//(yellow) let 87, from Prototype line 1
polly.energy;//(100) let 87, from Prototype line 1

polly.isActive();//(Energy is decreasing, currently at: 80, from line 84) let 87, from Protoype line 7 with if condition.

let penguin = new Bird("shriek", false, "black and white", 200)//overwrite or customize properties. Bird subClas from line 35;
penguin;//let 98, customized properties. Bird {sound: 'shriek',color: 'black and white', canFly: false,  energy: 200 }
penguin.sound; // 'shriek' from line 98
penguin.canFly; // false from line 98
penguin.color; // 'black and white' from line 98
penguin.energy; // 200 from line 98
penguin.isActive(); // Energy is decreasing, currently at: 180. from Prototype line 6.

let garfield = new HouseCat(); //called from subClass line 47

// garfield, no purring please:
garfield.makeSound(false); //let 106 (meow) from property 49, boolean false from 51
// garfield, both purr and meow now:
garfield.makeSound(true); // (purr, meow) let 106, from property 49 and boolean true from method 53

let leo = new Tiger();//called from subClass line 59
leo.makeSound(false); // (Roar!) property line 62 and boolean false 52
leo.makeSound(true); // (purr, Roar!) boolean true 65 and property line 62