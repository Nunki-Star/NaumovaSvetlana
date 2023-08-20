/*function checkTheNumber(str){
    numbers = "";
    for(let i = 0; i<str.length; i++){
        if(isNaN(str[i]) !== true){
            numbers += str[i]
        }
        
    }
    return numbers

}
console.log(checkTheNumber("a1b2c3"))*/

var filterString = function(value) {
    numbers = "";
    
      for(let i = 0; i<value.length; i++){
          if(isNaN(value[i]) !== true){
              numbers += value[i]
          }
          
      }
       return `${parseInt(numbers)}, For the input  "${value}" `
       
  
  }
console.log(filterString("abc123hg"))

    

