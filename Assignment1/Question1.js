// 1. Write a typescript program which contains one function named as Maximum. That function accepts three 
// parameters and it should returns largest value from three input parameters.
function Maximum(val1, val2, val3) {
    var maxNum = val1;
    if (val2 > maxNum) {
        maxNum = val2;
    }
    // if(val3 > maxNum){
    //     maxNum = val3;
    // }
    return maxNum;
}
var MaxNum = Maximum(23, 89, 6);
console.log("Maximum num is : " + MaxNum);
