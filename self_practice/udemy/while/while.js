/*num = 0;
while (num <= 10){
    console.log(num);
    num++
}*/
/*let num = 50
do{
    
    num++;
    console.log(num);
}
while(num <= 55)*/

/*let num = 50
for (let i = 1;  i < 8; i++){
    console.log(num);
    num++
}*/

/*let userName;
do{
    userName = prompt("please enter your name")
} while(userName === "" ||){
   
}

console.log("test")*/


/*var age = 1;
while (age < 30){
    console.log(`im ${age} years`);
    age++
}
console.log("im adult")*/



/*var age = 1;
while(age<30){
    console.log(`im ${age} years`);
    age++
}
console.log("im adult")*/


/*var age = 1;
do{
   console.log(`im ${age} years`);
   age++
} while(age < 10);
console.log("tahts it, im adult")*/

/*for(var age = 1; age<30; age++)
    console.log(`im ${age} years`);
console.log("thats it im adult")*/


/*function duckMassiveArguments(a){
    console.log(a);
    console.log(arguments.length);
    for(var i = 0; i<arguments.length; i++)
    console.log(arguments[i]);
}
duckMassiveArguments("aaa", "bbb")*/

/*function duckMassive(a){
    console.log(a);
    console.log(arguments.length);
    for(var i = 0; i < arguments.length; i++)
    console.log(arguments[i])
}
duckMassive("aaa", "bbb", "ccc")*/



/*function testFactorial(a) {
    let x = 1;
    for(let i = 1; i <= a; i++)
		x = x*i;
    return x;
let x  = 0;
let y = 1;
while(y <= a){
    if(y % 2 === 0){
        x = x + y;
        y++
    }
}    
}
console.log(testFactorial(7))*/
/*let color = "green";
switch (color){
    case "orange":
        alert("orange color");
        break;
    case "blue":
        alert("blue color");
        break;
    case "green":
        alert("correct!!!!")
}*/

/*for (let i = 0; i < 10; i++){
    saySomething();
}

function saySomething(){
    document.write("HELLO!");
}*/


function anyThing(a, b){
    let c = a+b;
    return c
}

for(let i = 1; i <= 5; i++){
    console.log(i, anyThing(3, 2))
}
