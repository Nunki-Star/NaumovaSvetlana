function chromosomeCheck(sperm) {
    if(sperm[0] === "X" && sperm[1] === "X"){
        return "Congratulations! You're going to have a son."
    }else{
        return "Congratulations! You're going to have a daughter."
    }
}
console.log(chromosomeCheck("XY"))