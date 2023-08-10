function disemvowel(str) {
  
    var outputString=str.replace(/[aeiouAEIOU]/g,"");
    return outputString;
     }
console.log(disemvowel("svetlana"))