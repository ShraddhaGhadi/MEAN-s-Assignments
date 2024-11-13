function Summation(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var numbers = [23, 6, 7, 4, 5, 7];
console.log("Addition is " + Summation(numbers));
