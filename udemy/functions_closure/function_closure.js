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

function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();

