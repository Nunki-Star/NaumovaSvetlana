function removeChar(str){
    let arr = [];
    let joinedStr = ""
    for(let i = 0; i < str.length; i++){
        arr.push(str[i])
    }

    let spliced = arr.slice(1, -1);
    for(let j = 0; j < spliced.length; j++){
        joinedStr += spliced[j]
    }
    return joinedStr
}
console.log(removeChar("svetlana"))
   