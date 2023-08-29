function summOfArrays(arr) {
	let totalSumm = 0;
	
	for (let i of arr) {
		if (typeof i == 'object') {
			totalSumm += summOfArrays(i);
		} else {
			totalSumm += i;
		}
	}
	
	return totalSumm;
}

console.log(summOfArrays([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8]));
  