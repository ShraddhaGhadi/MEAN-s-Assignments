function Maximum(val1, val2, val3) {
    var maxNum = val1;
    if (val2 > maxNum) {
        maxNum = val2;
    }
    return maxNum;
}
var MaxNum = Maximum(23, 89, 6);
console.log("Maximum num is : " + MaxNum);
