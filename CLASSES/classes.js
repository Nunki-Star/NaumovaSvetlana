/*class Person{
    name = "Any";
    hair = this.hair;
    age = this.age;
    greeting(){
        console.log("hello," + this.name + "." + "She is "+ this.age + "." + "her hair is " + this.hair)
        
    }
}

let firstPerson = new Person();
firstPerson.name = "Svetlana";
firstPerson.age = 36;
firstPerson.hair = "straight"
let secondPerson = new Person();
secondPerson.name = "Galina";
secondPerson.age = 66;
secondPerson.hair = "curly"
firstPerson.greeting()
secondPerson.greeting()*/

/*class Car{
    color = this.color;
    year = this.year;
    ride(){
        console.log("choose a car of " + this.color + " a year of " + this.year)
    }
}

let myCar1 = new Car();
myCar1.color = "red";
myCar1.year = 2007;
let myCar2 = new Car();
myCar2.color = "blue";
myCar2.year = 2010;
myCar1.ride();
myCar2.ride();*/

/*class Car{
    model = this.model;
    color = this.color;
    wheels = this.wheels;
    ride(){
        
        console.log(`my cars model is ${this.model}, its color is ${this.color}, it has ${this.wheels} wheels`)
    }
}

let myCar1 = new Car();
myCar1.color = "red";
myCar1.model = "bmw";
myCar1.wheels = 4;
let myCar2 = new Car(); 
myCar2.color = "black";
myCar2.model = "mercedes";
myCar2.wheels = "4";

myCar1.ride();
myCar2.ride();*/

class Box{
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    hi(){
        console.log("hi, " + this.name + " are you " + this.age + "?")
    }
}

let myBox = new Box("Olya", 12);
let myBox2 = new Box("Igor", 25);
let myBox3 = new Box("Vanya", 37);


myBox.hi();
myBox2.hi();
myBox3.hi()



