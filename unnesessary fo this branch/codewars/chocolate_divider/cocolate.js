function breakChocolate(n,m) {
    
    if(m === 1 && n > 1){
        return n - 1
    }else if(m <= 0 || n <= 0){
        return 0
    }else if (m > 1 && n > 1){
        return m * n - 1
    }
}

console.log(breakChocolate(5, 5))

