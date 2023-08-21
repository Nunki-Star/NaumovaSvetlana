function positiveSum(arr) {
    sum = 0;
    if(arr.length  === 0){
      return 0
    }else{
      for(let i = 0; i< arr.length; i++){
        if(arr[i] > 1){
          sum += arr[i]
        }
      }
      return sum
    }
}  