

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


/*function Car(color, model, year){
    var self = this;
    self.color = color;
    self.model = model;
    self.year = year;
    self.beep = function(){
        console.log("i have a " + self.model + " of " + self.color + " color. Of " + self.year + " year")
    }
}

var myCar = new Car("black", "bmw", 2020);
myCar.beep()*/

/*class Car{
    constructor(model, color){
        this.model = model;
        this.color = color
    }
    beep(){
        console.log("i have " + this.model + " of " + this.color + " color!")
    }
}

let myCar = new Car("bmw", "white");
myCar.beep()

console.log("my string :" + myCar)
console.log(myCar instanceof Car)*/


/*function Man(){
    this.eyesCount = 2;
    this.showEyes = function(){
        console.log("this" + this);
        console.log("eyes " + this.eyesCount)
    }
}
var man = new Man();
man.showEyes()


var showEyesFunc = man.showEyes;
showEyesFunc()*/

/*function Car(color, model){
    this.color = color;
    this.model = model;
    this.beep = function(){
        console.log("i have a " + this.model + " it has a " + this.color + " color")
    }
}

var myCar = new Car("red", "bmw");
var beepbeep = myCar.beep();
myCar.beep();*/

/*(function Food(drink, dish){
    var self = this;
    self.drink = drink;
    self.dish = dish;
    self.favourite = function(){
        console.log("i like to drink a " + self.drink + " and to eat a " + self.dish)
    }
}

var myFavourite = new Food("juice", "cake")
myFavourite.favourite()*/



/*class Education{
    constructor(favourite, unfavourite){
        this.favourite = favourite;
        this.unfavourite = unfavourite;
    }
    tellTheTruth(){
        console.log("my favourite subject was " + this.favourite + " and i didnt like " + this.unfavourite);
        console.log("my education " + this.favourite);
        console.log("my education" + this)
    }
}

var myEducation = new Education("english", "physics");
myEducation.tellTheTruth();


console.log("string" + myEducation)*/

/*function Car(){
    this.wheels = 4;
    this.beep = function(){
        console.log("this car has " + this.wheels + " wheels");
        console.log("string" + this);
        
    }
}

var anyCar = new Car;
//anyCar.beep()

var showWheels = anyCar.beep;
showWheels()*/


/*function Cyclope(){
    this.eyesCount = 1; 
    this.showEyes = showEyesFunc;
    
}
var cyclope = new Cyclope;
cyclope.showEyes()*/


/*class Planet{
    constructor(name, radius){
        this.name = name;
        this.radius = radius;
    }
    getSurfaceArea(){
        console.log(this.name + " palnet has radius " + this.radius)
    }

    set gravity(value){
        console.log("setting value!");
        this._gravity = value
    }
    get gravity(){
        console.log("getting value");
        return this._gravity
    }
}

let myPlanet = new Planet("Earth", 6378);

myPlanet.getSurfaceArea()
earth.gravity =9.81;
earth.getSurfaceArea()
console.log(earth.gravity)*/


/*function Planet(planet, width){
    this.planet = planet;
    this.width = width;
    this.intro = function(){
        console.log("my planet is " + this.planet + " it has a width " + this.width );
        console.log("string: " + this)
    }
}

var myPanet = new Planet("earth", 60123)
myPanet.intro()*/

/*function Planet(planet, width){
    var self = this;
    self.planet = planet;
    self.width = width;
    self.myFunc = function(){
        console.log("my planet is " + self.planet + " it has a width " + self.width)
    }
}

var myPlanet = new Planet("earth", 6895876);
myPlanet.myFunc()
console.log(myPlanet instanceof Planet)*/


let Planet = {
    planet:"earth",
    width:13456, 
    years:893795385893
}

let Planet2 ={
    planet:"jupiter",
    width:7458746583475638,
    years:75897983583598356935693586
}

let planetFunc = function(){
    console.log("My planet is " + this.planet + " its width is " + this.width + " years " + this.years)
}

planetFunc.call(Planet);
planetFunc.call(Planet2);

planetFunc.apply(Planet);
planetFunc.apply(Planet2)










