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
const myArray= [ 5, 7, 
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
sumOfArray(myArray)