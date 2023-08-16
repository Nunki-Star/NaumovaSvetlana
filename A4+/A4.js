/*function isPalindrom(str){
    let loweCaseLetters = str.toLowerCase();
    let splitString = loweCaseLetters.split("");
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
console.log(isPalindrom("Искать такси"))*/


function isPalindrom(str){
    let lettersToLowerCase = str.toLowerCase();
    let replaceSpace = lettersToLowerCase.replace(" ", "");
    let replacePunctuationMarks = replaceSpace.replace(/\s/g, "");
    return replacePunctuationMarks;
}
console.log(isPalindrom("SVETLANA, SveTLANA!"))