// . Write a typescript program which contains one function named as DisplayFactors. 
// That function should accept one number and display factors of that number
function DisplayFactors(num) {
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
}
var factor = DisplayFactors(20);
console.log("Factor :" + factor);
