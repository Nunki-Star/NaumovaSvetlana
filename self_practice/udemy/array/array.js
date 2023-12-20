/*let groceries = ["milk", "water", "banana"]
let addingItem = groceries.push("bread")
console.log(addingItem)
console.log(groceries)
let addingItemFront = groceries.unshift("vitamins")
console.log(addingItemFront)
console.log(groceries)

let removeBack = groceries.pop()
console.log(groceries)
let removeFront = groceries.shift();
console.log(groceries)

let groceries2 = ["TEA", "COFEE"]
let twoArrays = groceries.concat(groceries2)
console.log(twoArrays)*/

/*let names = ["merge", "homer", "bart"];
function capitalizeitem(item){
    let firstLetter = item.charAt(0).toUpperCase();
    return firstLetter + item.slice(1);
}
let newArray = names.map(capitalizeitem)
console.log(newArray)*/
/*const myArray= [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ]
  ;
function sumOfArray(arr){
    let mySum = 0;
    for(let i = 0; i<arr.length; i++){
        mySum +=arr[i]
    }
    console.log(mySum);
}
sumOfArray(myArray)*/

/*function findAverage(array) {
    let sum = 0;
    if(array.length === 0){
        return 0;
    }else{
    
    for(let i = 0; i < array.length; i++){
    sum+=array[i];}
    }
    return sum/array.length;
  }
  console.log(findAverage([4, 2]))*/

  /*function findNeedle(haystack) {
    let indexOfNeedle = haystack.indexOf("needle", 0);
    let total = "found the needle at position " + indexOfNeedle;
    return total;
  }
  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))*/

  
  /*function removeEveryOther(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            return arr[i]
        }
    }
  }  
console.log(removeEveryOther(["milk", "banana", "chocolate", "bread"]))*/

/*function removeEveryOther(arr){
    for( i = arr.length - 1; i >= 0; i--) if( i % 2 === 1) arr.splice(i,1);}

  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));


let arr=[1, 2, 4];
console.log()*/

let a = [1,2]

(function() { alert(a) })()
