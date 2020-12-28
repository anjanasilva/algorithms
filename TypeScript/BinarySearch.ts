const sortedArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
console.log(binarySearch(sortedArray, 3));

/**
 * Takes a sorted array, target value and return the index of the target value in the array
 * @param sortedArray Sorted array
 * @param target Target value to search
 * @returns Return the index or -1 if not found in the array
 */
function binarySearch(sortedArray: number[], target: number): number {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  
  while (startIndex <= endIndex) {
  	let middleIndex = Math.floor((startIndex + endIndex)/2);
  	if (target === sortedArray[middleIndex]) {
      // Found and returing the index
    	return middleIndex;
    } else if (target >  sortedArray[middleIndex]) {
    	startIndex = middleIndex + 1;
    } else if (target < sortedArray[middleIndex]) {
    	endIndex = middleIndex - 1;
    }
  }
  
  return -1; // Not found
  
};
