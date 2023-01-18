// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() { //method
        this.energy += 10 //from line 6
    }
    doSomethingFun() {
        this.energy -= 10 //from line 6
    }
}

// Task 2: Code a Worker class
class Worker extends Person{ //subClass1 from Prototype line 2
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy)//from Prototype line 1
        this.xp = xp;//w/ value
        this.hourlyWage = hourlyWage;//w/ value
    }
    /* sleep() {
        super.sleep();//from prototype line 9
    }
    doSomethingFun() {
        super.doSomethingFun();//from prototype line 11
    } */
    goToWork() {//method
        this.xp += 10; //from line 20
    }
}
// Task 3: Code an intern object, run methods
function intern() {//function
    let intern = new Worker("Bob", 21, 110, 0, 10)//Worker initiated to a new intern object from line 17
    intern.goToWork()//run the goToWork() method from line 29 on the intern object.
    return intern;// return the intern object to the function
}

// Task 4: Code a manager object, methods
function manager() {//function
    let manager = new Worker("Alice", 30, 120, 100, 30);//new Worker object initiated from line 17
    manager.doSomethingFun();//run method from line 11 on the object
    return manager;//return the object
}
console.log(intern());//console function from line 34
console.log(manager());//console function from line 41