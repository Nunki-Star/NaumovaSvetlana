/*function disemvowel(str) {
  
    var outputString=str.replace(/[aeiouAEIOU]/g,"");
    return outputString;
     }
console.log(disemvowel("svetlana"))*/

let str = " svetlana ";
if(str.lastIndexOf(" ") !== -1 || str.indexOf(" ") === 0){
    str.replace([" "], "");
    console.log(str.indexOf("s"))
}else{
    console.log("no")
}