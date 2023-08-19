function recursPalindrom(str){
    let lettersToLowerCase = str.toLowerCase();
    let replaceSpace = lettersToLowerCase.replace(" ", "");
    let replacedPunctuationMarks = replaceSpace.replace(/[\.,%!?]/g, '');
    let revercedStr = "";

    for(let i = replacedPunctuationMarks.length - 1; i >= 0; i--){
        revercedStr += replacedPunctuationMarks[i]
    }
    if(str.length === 1){
        return `the string you are checking is a palindrom`
    }
    if(str.length === 2){
        if(str[0] === str[1]){
            return `the string you are checking is a palindrom`
        }
    }
    if(str[0] === revercedStr[0]){
        return recursPalindrom(str.slice(1, -1))
    }else{
        return `the string you are checking is not a palindrom`
    }
}
console.log(recursPalindrom("anna"));
console.log(recursPalindrom("шалаш"));
console.log(recursPalindrom("programming"))