function recursPalindrom(str){
    let toSmallLettes = str.toLowerCase();
    let removeSpace = toSmallLettes.replace(" ", "");
    return removeSpace
    
}
console.log(recursPalindrom("Svetala Svetlana"))