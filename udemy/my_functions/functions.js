/*function sayHello(name){
    console.log("Hello, " + name)
}
sayHello("Svetlana")*/


//function sayHello(){
   // alert("say hello!");
//}
//sayHello();

/*function summaryOfNumbers(num1, num2){
    //alert(num1 + num2);
    const numbersSummary = num1 + num2;

}
summaryOfNumbers(5, 6);*/


//function sayHello(){
    //alert("hello world!")
//}
//sayHello();

/*num11 = 20
function getSum(num1, num2){
    
    console.log(num1 + num2);
}
getSum(10,2)*/



/*function getTheName(){
    console.log("Svetlana")
}
getTheName();

function getSum(a, b){
    console.log(a+b);
}
getSum(2, 3);


function getTheDistance(speed, time){
    let theDistace = speed * time;
    return theDistace;
}
let checkedDistance  = getTheDistance(2, 6);
console.log(checkedDistance)



function multiplyNumbers(x, y){
    let letsMultiply = x*y;
    return letsMultiply;
}
let numbersMultiply = multiplyNumbers(4, 6);
console.log(numbersMultiply);


function minusNumbers(num1, num2){
    let letsMinus = num1 - num2;
    return letsMinus;
}

let numbersInMinus = minusNumbers(4,1);
console.log(numbersInMinus);


function middleNumber(a, b, c){
    let getMidNumber = (a+b)/c;
    return getMidNumber;
}
let myMid = middleNumber(4, 4, 2);
console.log(myMid);



console.log(getMyNum(2, 2, 4, 4))

function getMyNum(num1, num2, num3, num4){
    let totalNum = (num1 * num2) + (num3 * num4);
    return totalNum;
}


console.log(getSum(4, 7))

function getSum(num1, num2){
    let mySum = num1 + num2;
    return mySum
}*/
/*function getElements(a, b, ... other){
    console.log(a);
    console.log(b);
    console.log(other.length);
    for(let i=0; i<other.length; i++)
        console.log(other[i])
}
getElements(5, 6, 7, 8)*/

/*function position(letter){
    switch(letter){
        case a: return "Position of alphabet: 1";
        case b: return "Position of alphabet: 2";
        case c: return "Position of alphabet: 3";
        case d: return "Position of alphabet: 4";
        case e: return "Position of alphabet: 5";
        case f: return "Position of alphabet: 6";
        case g: return "Position of alphabet: 7";
        case h: return "Position of alphabet: 8";
        case i: return "Position of alphabet: 9";
        case j: return "Position of alphabet: 10";
        case k: return "Position of alphabet: 11";
        case l: return "Position of alphabet: 12";
        case m: return "Position of alphabet: 13";
        case n: return "Position of alphabet: 14";
        case o: return "Position of alphabet: 15";
        case p: return "Position of alphabet: 16";
        case q: return "Position of alphabet: 17";
        case r: return "Position of alphabet: 18";
        case s: return "Position of alphabet: 19";
        case t: return "Position of alphabet: 20";
        case u: return "Position of alphabet: 21";
        case v: return "Position of alphabet: 22";
        case w: return "Position of alphabet: 23";
        case x: return "Position of alphabet: 24";
        case y: return "Position of alphabet: 25";
        case z: return "Position of alphabet: 26";
    }
}*/


/*function sayHello(name) {
    console.log(`Привет, ${name}!`)
}
sayHello("Артем")


function returnNeighboringNumbers(num2) {
    let middleNumber = num2;
    let myArray = [];
    let neighbour1 = num2 - 1;
    let neighbour2 = num2 + 1;
    return [neighbour1, middleNumber, neighbour2]
 }
myArray = console.log(returnNeighboringNumbers(5))*/

/*function minusNumber(a, b){
    console.log(a-b);

}
minusNumber(4, 3);

function plusNumber(a, b){
    let myMinus = a - b;
    return myMinus
}
console.log(plusNumber(7, 5))*/


function person(){
    let name = "peter";
    return function dispalyName(){
        console.log(name);
    };
}
let peter = person();
peter()
