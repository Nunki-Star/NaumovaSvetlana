//first simple function

/*function calculateRectangleArea(length, width){
    return length*width
}

let myRoomArea = calculateRectangleArea(10, 10);
console.log(`${myRoomArea} square meters`
)*/

function youSayGoodbye(){
    alert("good bye!");
    function andIsayHello(){
        alert("hello!");
    }
    return andIsayHello;
}