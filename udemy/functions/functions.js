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
function getElements(a, b, ... other){
    console.log(a);
    console.log(b);
    console.log(other.length);
    for(let i=0; i<other.length; i++)
        console.log(other[i])
}
getElements(5, 6, 7, 8)

