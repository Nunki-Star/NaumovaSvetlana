"use strict"

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

/*class Box{
    _age = 0;
    _name = ""
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    hi(){
        console.log("hi, " + this.name + " are you " + this.age   + "?")
       
    }
    set age(value){
        this._age = value;
        console.log("year of birth of "+ this.name +" is ", 2023 - this._age);
        console.log("")
    }
    get age(){
        return this._age
    }


    
}

let myBox = new Box("Olya", 12);
let myBox2 = new Box("Igor", 25);
let myBox3 = new Box("Vanya", 37);


myBox.hi();
myBox2.hi();
myBox3.hi()*/


/*class Car{
    _year = 0;
    constructor(color, model, year){
        this.color = color;
        this.model = model;
        this.year = year;
    }
    beep(){
        console.log(`i have a ${this.model} car, it has a ${this.color} color. it was made in ${this.year}`)
    }
    set year(value){
        this._year = value;
        console.log(`my car has 2023-`)
    }
    
}
let myCar = new Car("white", "mercedes", 2019);
myCar.beep()*/

/*function MotorCar(CarNum){
    var self = this;
    self.num = CarNum;
    self.beep = function(){
        console.log('motorcar num: ' + self.num + ' beeeeeeep!')
    }
}

var car2 = new MotorCar('1-A')
console.log(car2.num);
car2.beep ();*/


/*function Car(model, year){
    //let self = this;
    //self.num = carModel;
    
    let self = this;
    self.model = model;
    self.year = year;

    self.beep = function(){
        console.log("my car is " + self.model)
    }


}

let myCar = new Car("mercedes", 2019);

myCar.beep()

console.log("string" + myCar)*/













