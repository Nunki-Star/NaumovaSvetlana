function highAndLow(numbers){
    let splitNumbers = numbers.split(" ");
    let minNumber = Math.min(...splitNumbers);
    let maxNumber = Math.max(...splitNumbers);
    return `${maxNumber} ${minNumber}`

    
  }
console.log(highAndLow("1 2 3 4 5"))
