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


/*const myArr = [1, 2, 3, 4, 5, 6, 7, 8];


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




const myReduceArr = [1, 2, 3];

let myReduceMethod = myReduceArr.reduce((accum, item)=>{
  accum = accum + item;
  return accum
})

console.log(myReduceMethod)*/

/*let a  = [1, 2, 3, -4, -5, -6, 7];

let b = a.reduce((accum, item)=>{
  if(item > 0){
    return accum+= item;
  }else{
    return item;
  }
})

console.log(b)

let c = a.map(item=>{
  if(item >0){
    return item + item
  }
})

console.log(c)*/


/*let a = [-3, 2, 4, 5, -2];


let b = a.reduce((accum, item)=>{
  if(item > 0){
    return accum+item
  }else{
    return accum
  }
}, 0);


console.log(b)*/


/*let arr = [1, 2, 3, 4, 5, 6, 7];
let mapping = arr.map(item=>{

  return item * 2
})

console.log(mapping);


let arr2 = [2, 3, 4];
let reduceArr = arr2.reduce(accum(item=>{
  return accum
}))*/




const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2=["one", "two", "three"]

console.log(arr.length);//7

console.log(arr.concat(arr2));//[1, 2, 3, 4, 5, 6, 7, "one", "two", "three"]
const arr3 = [1, 2, 3]
arr3.push("hi")//[1, 2, 3, "hi"]
console.log(arr3);
arr3.pop();//[1, 2, 3]
console.log(arr3)

const arr4=[1, 2, 3, 4];
console.log(arr4.shift());
console.log(arr4);//[2, 3, 4]
 
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr5.slice(1, 4));//2, 3, 4

console.log(arr5.slice(3));//3, 4, 5, 6, 7, 8 9



let arr6 = [1, 2, 3, 4, 5];

console.log(arr6.splice(1, 2, "hi"))

console.log(arr6);

const arr7 = ["a", 1, "why"];

function f(v, i, a){
  console.log(i + "/" + v)
}
arr7.forEach(f)




const arr8= ["hi", "why"];


const foreachArr = arr8.forEach((v, i, a)=>{
  console.log(i + "/" + v)
})


const arr9 = ["one", "two", "three"];

let myArr = arr9.forEach((i, v)=>{
  return i+ "/" + v
})



const newArr = [1, 2, 3];

const newArrEvery = newArr.every((v, i)=>{
  return v > 0
})

console.log(newArrEvery);



const myArr2 = [2, 3, 4, 5, 6];

const myarr2Some = myArr2.some((v, i)=>{
  return i > 10
})

console.log(myarr2Some);

const arrFilter = [2, 3, 4, 5, 6 ];

const myFilter = arrFilter.filter((v, i)=>{
  return v > 4
})

console.log(myFilter);


const mynewArr = [1, 3, 5, 6];

const arrMap = mynewArr.map((v, i, a)=>{
  return 
});

console.log(arrMap);

const arrReduce = [-21, 2, 3, 4, 5, 6,8];

const newReduce = arrReduce.reduce((acc, v)=>{
  return acc+= v
},0)

console.log(newReduce);

const myNewArr = [1, 2, 3, 4, 5, 6, 7, 8];

const myJoin = myNewArr.join();
console.log(typeof myJoin);


