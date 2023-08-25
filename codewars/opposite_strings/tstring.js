function isOpposite(s1,s2){
    
    for(let i = 0; i<s1.length; i++){
        for(let k = 0; k<s2.length; k++){
            if(s1[i] === s2[k]){
                return true
            }
            else{
                return false
            }
        }
    }

  }
console.log(isOpposite("a", "abck"))