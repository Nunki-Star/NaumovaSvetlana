function tailSwap(arr) {
   let item1 = arr[0]
   let item2 = arr[1];
   let itemNumbers1 = [];
   let itemNumbers2 = [];
   let itemString1 = [];
   let itemString2 = [];
   let finalArr = [];

   for(let k = 0; k < item1.length; k++){
    if(isNaN(item1[k]) !== false){
        itemString1 += item1[k];
        }
    }
    //finalArr.push(itemString1)

    for(let j = 0; j<item2.length; j++){
        if(isNaN(item2[j]) === false){
            itemNumbers2 += item2[j]
        }
    }
    //finalArr.push(itemNumbers2)

    let sum1 =itemString1 + itemNumbers2
    finalArr.push(sum1)


    for(let g = 0; g<item1.length; g++){
        if(isNaN(item2[g]) !== false){
            itemString2 += item2[g]
        }
    }
    //finalArr.push(itemString2)


   for(let i = 0; i<item1.length; i++){
    if(isNaN(item1[i]) === false){
        itemNumbers1 += item1[i];

        }
    }

    let sum2 = itemString2 + itemNumbers1
    //finalArr.push(itemNumbers1)

    finalArr.push(sum2)
    
    
    return finalArr

  }
console.log(tailSwap(["a:12345", "777:xyz"]))