let groceries = ["milk", "water", "banana"]
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