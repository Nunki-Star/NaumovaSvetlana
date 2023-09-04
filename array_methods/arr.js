/*let arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4))

let a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a.slice(3, 5))
console.log(a.slice(1, 4))


console.log(arr.splice(2, 3));
console.log(arr.splice(2, 2, "e", "o"))


let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr2.splice(2, 3, "abc"))
console.log(arr2)

let arr3 = ["a", "b", "c", "d", "e", "f", "g"];
console.log(arr3.splice(2, 2, "hhh", "ffff"))
console.log(arr3)*/

/*function ff(v, i, a){
    console.log(i + "/" + v)
}

var m = ["z", null, 55]
m.forEach(ff)*/


/*let a  = ["a", "b", "c", "d", "e", "f"]
console.log(a.slice(2, 4))

let b = ["a", "b", "c", "d", "e", "f"]
console.log(b.splice(2, 2))
console.log(b)*/


/*function myFunc(i, f){
    console.log(i + "$$$$$$$$" + f) /////forEach
}
var a  = [null, "66666", 77777]
a.forEach(myFunc)*/


/*function accum(s){
    const result = []
  const lowerStr = s.toLowerCase()

  for(let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase()
    for(let j = 0; j < i; j++) {
      str += lowerStr[i]
    }
    result.push(str)
}
    return result
}   

console.log(accum("abcd"))*/

/*function onclickFunction(){
  alert("thats how it works")
}


let numbers = [1, 2, 3, 4];
function getAverage(numbers){
  const total = numbers.reduce((total, number) =>{
    return total + number
  })
  return total/numbers.length;

}


const myArray = [2, 2, 2];
function multiply(myArray){
  const multiple = myArray.reduce((total, number)=>{
    return total * number
  })
}

console.log(multiply(myArray))



const a = [1, 2, 3, 4, 5, 6];
const b = a.slice(1, 4);
console.log(b)


const v = [7, 3, 5, 7, 4, 1, 7, 4, 6, 7, 8, 44,3 ];
const n = v.slice(5, 9);
console.log(n)

const temp = [4, 7, 8, 9, 1, 7, 8];
let tf = temp.map(item => {
  console.log(item)
})

const myArr = ["practice", 2, 3, 4, 5, 6];

const letsMap = myArr.map(item=>{
  console.log(item * 2)
})


const newArr = ["aaa", 2, 3];

let mapping = newArr.map(item =>{
  console.log(item*2)
})*/


const myArr = [1, 2, 3, 4, 5, 6, 7, 8];


let b = myArr.slice(2, 5);

console.log(b);


const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c = myArr2.splice(3, 2, "hi");

console.log(myArr2);


const myArr3 = [1, 2, 3, 4, 5, 6, 7, 8];


let d = myArr3.map(item =>{
  return item + 1
})

console.log(d)



let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mapping = newArr.map(item=>{
  return item * 3
})

console.log(mapping)

