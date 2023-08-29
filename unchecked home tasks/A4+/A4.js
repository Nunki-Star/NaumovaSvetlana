function recursPalindrom(str){
    let lettersToLowerCase = str.toLowerCase();
    let replaceSpace = lettersToLowerCase.replaceAll(" ", "");
    let replacedPunctuationMarks = replaceSpace.replace(/[\.,%!?]/g, '');
    let revercedStr = "";

    for(let i = replacedPunctuationMarks.length - 1; i >= 0; i--){
        revercedStr += replacedPunctuationMarks[i];
        
    }
    
    if(replacedPunctuationMarks.length === 1){
        return `the string you are checking is a palindrom`
    }

    if(replacedPunctuationMarks.length === 2){
        if(replacedPunctuationMarks[0] === replacedPunctuationMarks[1]){
            return `the string you are checking is a palindrom`
        }
    }
    if(replacedPunctuationMarks[0] === revercedStr[0]){
        return recursPalindrom(str.slice(1, -1))
    }else{
        return `the string you are checking is not a palindrom`
    }
}
console.log(recursPalindrom("An!!!       ????Na"));
console.log(recursPalindrom("шал!!!!!      аш"));
console.log(recursPalindrom("programming"))

//let a = "anna"
//console.log(a.slice(1, -1)) пишем не с нуля а с какого по какой индекс!