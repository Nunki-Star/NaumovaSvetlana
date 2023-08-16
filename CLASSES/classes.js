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


class Clothes{
    dress = this.dress;
    jeans = this.jeans;
    count = this.count;
    laundry(){
        console.log("my mum has a dress of " + this.dress + " color and jeans of " + this.jeans + " total count of " + this.count)
    }
}


let clothesForMum = new Clothes();
clothesForMum.dress = "red";
clothesForMum.jeans = "zara";
clothesForMum.count = 20
let clothesForMe =new Clothes();
clothesForMe.dress = "pink";
clothesForMe.jeans = "colins";
clothesForMe.count = 22
clothesForMum.laundry();
clothesForMe.laundry();