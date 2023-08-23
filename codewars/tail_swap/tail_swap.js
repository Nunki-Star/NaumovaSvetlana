/*function tailSwap(arr) {
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
console.log(tailSwap(["a:12345", "777:xyz"]))*/



function tailSwap(arr){
    let beforeDotts1 = [];
    let afterDotts1 = [];
    let beforeDotts2 = [];
    let afterDotts2 = [];
    let first = arr[0];
    let second = arr[1]
    let firstArr = first.split("");
    let secondArr = second.split("");
    let finalArr1 = [];
    let finalArr2 = [];
    for(let i = 0; i<firstArr.length; i++){
        beforeDotts1.push(firstArr[i]);
        if(firstArr[i] === ':'){
            break
        }
    }
    for(let j = firstArr.length - 1; j>= 0; j--){
        afterDotts2.unshift(firstArr[j]);
        if(firstArr[j] === ":"){
            break
        }
        
    }

    for(let h = 0; h<secondArr.length; h++){
        beforeDotts2.push(secondArr[h]);
        if(secondArr[h] === ":"){
            break
        }
    }

    for(let k = secondArr.length -1; k>= 0; k--){
        afterDotts1.unshift(secondArr[k]);
        if(secondArr[k] === ":"){
            break
        }

    }
    afterDotts1.shift();
    afterDotts2.shift();
  
   a =  beforeDotts1.concat(afterDotts1);
   b = beforeDotts2.concat(afterDotts2);
   a1 = a.join("");
   b1 = b.join("");
   finalArr1.push(a1);
   finalArr2.push(b1);
   total = finalArr1.concat(finalArr2)
    return total
    
}
console.log(tailSwap(['abc:123', 'cde:456']))