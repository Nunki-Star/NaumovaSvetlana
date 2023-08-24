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


function accum(s){
    s = s.split("");
    s.forEach(function(i){
    
        console.log(i + "-")
    })
    return s
}   

console.log(accum("abcd"))

