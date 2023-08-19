function recursPaindrom(str){
    let lowCase = str.toLowerCase();
    let removeSpace = lowCase.replaceAll(" ", "");
    let replaceMarks = removeSpace.replace(/[\.!?;:]/g,"");
    let reversedStr = "";
    for(let i  = replaceMarks.length; i>= 0; i--){
        reversedStr += replaceMarks[i];
    }
    if(replaceMarks.length === 1){
        return `the string is palindrom`
    }
    if (replaceMarks.length === 2){
        if(replaceMarks[0] === replaceMarks[1]){
            return `the string is palindrom`
        }
        if(replaceMarks[0] === reversedStr[0]){
            return recursPaindrom(str.slice(1, -1))
        }else{
            return `is not a palindrom`
        }
    }
}
console.log(recursPaindrom("ANN!!     na"));
console.log(recursPaindrom("svet!!        laNa"))

