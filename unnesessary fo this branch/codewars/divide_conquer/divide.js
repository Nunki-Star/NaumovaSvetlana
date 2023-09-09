
    function divCon(x){
     let arr = [];
     let arr2 = []
     let summFromString = 0;
     let summFromNumber = 0;
     
    for(let i  = 0; i < x.length; i++){
        if(typeof x[i] === "string"){
             arr += x[i]
          }
     }  
     
    for(let k = 0; k<arr.length; k++){
          summFromString += parseInt(arr[k]);
         
    }

    for(let k = 0; k<x.length; k++){
        if(typeof x[k] !== "string"){
            arr2+=x[k]
            
        }
       
    }

    for(let g = 0; g<arr2.length; g++){
        summFromNumber+=parseInt(arr2[g])
    }

    let total = summFromNumber - summFromString
    return total
}
    
    
    

    /*     
     let fromNumToString = summ.toString();
     let arr2 = [];
     let summ2 = 0;
     for(let j  = 0; j < fromNumToString.length; j++){
           arr2 += fromNumToString[j];
     }
 
     for(let g = 0; g<arr2.length; g++){
           summ2 += parseInt(arr2[g]);
         }
      return summ2;
        } 
 }  */   
  

console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))