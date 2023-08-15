function isPalindrom(str){
    let splitString = str.split("");
    let reversedArr = splitString.reverse();
    for(let i = 0; i < str.length; i++){
        for(let k = 0; k<reversedArr.length; k++){
            if(str[i] === reversedArr[k]){
                let truePalindrom = "the string is palindrom";
                return truePalindrom
            }else{
                let falsePalindrom = "the string is not a palindrom"
                return falsePalindrom
            }
        }
    }

   
}
console.log(isPalindrom("anna"));
console.log(isPalindrom("svetlana"));
console.log(isPalindrom("Искать такси"))
