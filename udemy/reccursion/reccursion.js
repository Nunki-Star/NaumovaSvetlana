//стрелочные функции
/*let mySum = (a, b) => a + b;
console.log(mySum(2, 3))*/ 

/*let myMultiply = a => a*2;
console.log(myMultiply(5))*/

const factorial = (n) =>{
    if (n === 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}

const answer = factorial(6)
console.log(answer)