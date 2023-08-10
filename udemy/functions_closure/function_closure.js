//first simple function

/*function calculateRectangleArea(length, width){
    return length*width
}

let myRoomArea = calculateRectangleArea(10, 10);
console.log(`${myRoomArea} square meters`
)*/

/*function youSayGoodbye(){
    alert("good bye!");
    function andIsayHello(){
        alert("hello!");
    }
    return andIsayHello;
}

let something = youSayGoodbye();
something()*/

/*function init(){
    var name = "mozilla";
    function displayName(){
        alert (name);
    }
    displayName();
}
init();*/

/*function makeFunc(){
    var name = "mozilla";

    function displayName(){
        alert(name)
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc();*/

/*let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();*/

/*function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();*/

 /*let a  = 12;
 function f(){
    let b = 42;
    console.log(a);
    console.log(b);
 }
 f();
 f();
 f();*/

 /*let count = 0;
 function counter(){
    
    count++;
    return count
 }
 console.log(counter());
 console.log(counter());
 console.log(counter());*/

 /*function Counter(){
    var count = 0;
    return function(){
        count++;

        return count;
    }
 }

 var counter = Counter();
 console.log(counter());
 console.log(counter());
 console.log(counter());

 var anotherCounter = Counter();
 console.log(anotherCounter())*/

 function disemvowel(str) {
    
    let outputString=str.replace(/[aeiouAEIOU]/g,"");
    return outputString;
     }
  

let check = console.log(str("svetlana"))