//стрелочные функции
/*let mySum = (a, b) => a + b;
console.log(mySum(2, 3))*/ 

/*let myMultiply = a => a*2;
console.log(myMultiply(5))*/

/*const factorial = (n) =>{
    if (n === 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}

const answer = factorial(6)
console.log(answer)*/
 
/*function sumOfArrays(arr){
   let add = 0;
    for(let i = 0; i<arr.length; i++){
       for(let k = 0; k<arr[i].length; k++){
        add += arr[i][k];
       }
        
    } 

    return add;
}
console.log(sumOfArrays([10, 3, 4[2, 5]]))*/

/*function getArraysSumm(arr) {
  

    let sum = 0;
    
  
    for (let i = 0; i < arr.length; i++) {
      
  
      for (let j = 0; j < arr[i].length; j++) {
        
      
        sum += arr[i][j];
        
      }
      
    }
    
    return sum;
    
  }
  
  console.log(getArraysSumm([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8]));*/

/*function sumOfMultipleArrays(arr){/
    totalCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i]) == false){
             totalCount+=arr[i];
            }else if( Array.isArray(arr[i] == true)){
                return sumOfMultipleArrays(arr[i])
            }
        }
    }
            

console.log(sumOfMultipleArrays([2, 3, 4]))*/

/*function sumOfMultipleArrrays(arr){
    totalCount = 0;
    for(let i = 0; i < arr.length; i++){
        totalCount += arr[i];
        
    }if(Array.isArray(arr[i]) === true){
        return sumOfMultipleArrrays();
    }
}
console.log(sumOfMultipleArrrays([2, 3[2, 3]]))*/

function summOfArrays(arr) {
	let totalSumm = 0;
	
	for (let i = 0; i<arr.length; i++) {
		if (typeof i == 'object') {
			totalSumm += summOfArrays(i);
		} else {
			sum += i;
		}
	}
	
	return totalSumm;
}

console.log(summOfArrays([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8]));
  //[ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8]

