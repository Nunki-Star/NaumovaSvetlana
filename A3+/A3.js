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
    let replacedPunctuationMarks = replaceSpace.replace(/[\.,%!?]/g, '');
    let revercedStr = ""
    for(let i = replacedPunctuationMarks.length - 1; i>=0; i--){
        revercedStr += replacedPunctuationMarks[i];
    }
    for( let i = 0; i < replacedPunctuationMarks.length; i++){
        for (let k = 0; k < revercedStr.length; k++){
            if(replacedPunctuationMarks[i] === revercedStr[k]){
                return `Your string "${str}" is palindrom`
            }else{
                return `Your string "${str}" is not a palindrom`
            }
        }
    }
}

console.log(isPalindrom("!!!An,,,na!!!"));
console.log(isPalindrom("Искать!!!!! такси????"));
console.log(isPalindrom("Programming"))

        
    

