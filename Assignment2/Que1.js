function Maximum(arr) {
    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
var numOfArray = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Maximum number is " + Maximum(numOfArray));
