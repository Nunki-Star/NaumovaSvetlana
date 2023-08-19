function recursPaindrom(str){
    let lowCase = str.toLowerCase();
    let removeSpace = lowCase.replaceALL(" ", "");
    let replaceMarks = removeSpace.replace(/[\.!?;:]/g,"");
    let reversedStr = "";
    for(let i  = replaceMarks.length; i>= 0; i--){
        reversedStr += replaceMarks[i]
    }
    return reversedStr
}
console.log(recursPaindrom("ANN!!     na"));
console.log(recursPaindrom("svet!!        laNa"))