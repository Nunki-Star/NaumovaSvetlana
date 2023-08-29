function countTheRussianVowEls(str){
    const vowels = "АОЫУЕИаоыуеи";
    let vowelsCount = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i]) !== -1){
            vowelsCount += 1
        }
    }
    return vowelsCount;
    
}
console.log(countTheRussianVowEls("светлана"))