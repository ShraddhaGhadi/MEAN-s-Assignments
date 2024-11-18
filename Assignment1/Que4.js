// Write a typescript program which contains one function named as ChkPrime. That function 
// should accept one number and it should return true if the given number is prime and otherwise return false.
function ChkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
var num = 12;
if (ChkPrime(7)) {
    console.log("It is prime number");
}
else {
    console.log("It is not a prime number");
}
