function isPalindrome(str){
    let strLower = str.toLowerCase();
    let removeSpace = strLower.replaceAll(" ", "");
    let removeMarks = removeSpace.replace(/[\.,;!?]/g, "");
    let revesedStr = "";
    for(let i = removeMarks.length - 1; i >= 0; i--){
        revesedStr += removeMarks[i];
    }
    
    for(let k = 0; k<removeMarks.length; k++){
        for(let j = 0; j<revesedStr.length; j++){
            if(removeMarks[k] === revesedStr[j]){
                return `${str} is palindrome`
            }else{
                return `${str} is not a palindrome`
            }
        }
    }
}


console.log(isPalindrome("     SVETLANA..?;      svetlana"));
console.log(isPalindrome("АнН               а"));

console.log(isPalindrome("a!!!!!       NNA"));
console.log(isPalindrome("SVRTKHFKJ     !!!!!!??????AABB"))

