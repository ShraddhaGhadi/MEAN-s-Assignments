function Maximum(arr) {
    var fmax = arr[0];
    var smax = -1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > fmax) {
            smax = fmax;
            fmax = arr[i];
        }
        else if (arr[i] > smax && arr[i] !== fmax) {
            smax = arr[i];
        }
    }
    return smax;
}
var numArr = [23, 89, 6, 29, 56, 45, 77, 32];
var smax = Maximum(numArr);
console.log("Second Maximum number is " + smax);
