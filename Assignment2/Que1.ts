// Write a typescript program which contains one function named as Maximum. That function accepts array of numbers and returns the largest number from array

function Maximum(arr: number[]): number {
    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
    return maxNum; 
  }
  const numOfArray = [23, 89, 6, 29, 56, 45, 77, 32];
  console.log("Maximum number is " + Maximum(numOfArray));