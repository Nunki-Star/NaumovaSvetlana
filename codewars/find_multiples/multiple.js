function findMultiples(integer, limit) {
    let arr = [];
    sum = 0
    while(true){
      sum += integer;

      arr.push(sum);
      if(sum > limit){
        return arr.slice(0, -1);
    }
    
    }
    
  }
console.log(findMultiples(4, 27))
