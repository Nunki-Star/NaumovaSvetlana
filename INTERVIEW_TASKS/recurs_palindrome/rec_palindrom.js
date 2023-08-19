function recursPalindrom(str){
    let lowCase = str.toLowerCase();
    let removeSpace = lowCase.replaceAll(" ", "");
    let replaceMarks = removeSpace.replace(/[\.!?;:]/g,"");
    let reversedStr = "";
    for(let i  = replaceMarks.length -1 ; i>= 0; i--){
        reversedStr += replaceMarks[i];
    }
    if(replaceMarks.length === 1){
        return `the string is palindrom`
    }
    if (replaceMarks.length === 2){
        if(replaceMarks[0] === replaceMarks[1]){
            return `the string is palindrom`
        }
    }
    if(replaceMarks[0] === reversedStr[0]){
        return recursPalindrom(str.slice(1, -1));
    }else{
        return `is not a palindrom`
    }
}

console.log(recursPalindrom("n"))
console.log(recursPalindrom("nn"));
console.log(recursPalindrom("ann     !!!!a"))
console.log(recursPalindrom("svet!!        laNa"))

