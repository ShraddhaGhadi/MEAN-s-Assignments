var Arithmetic = /** @class */ (function () {
    function Arithmetic(n1, n2) {
        this.Number1 = n1;
        this.Number2 = n2;
    }
    Arithmetic.prototype.Addition = function () {
        var Result = this.Number1 + this.Number2;
        return Result;
    };
    Arithmetic.prototype.Subtraction = function () {
        var Result = this.Number1 - this.Number2;
        return Result;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Result = this.Number1 * this.Number2;
        return Result;
    };
    Arithmetic.prototype.Division = function () {
        var Result = this.Number1 / this.Number2;
        return Result;
    };
    return Arithmetic;
}());
var object1 = new Arithmetic(40, 10);
var object2 = new Arithmetic(50, 70);
var Result = 0;
console.log("Object 1");
Result = object1.Addition();
console.log("Addition is: " + Result);
Result = object1.Subtraction();
console.log("Subtraction is: " + Result);
Result = object1.Multiplication();
console.log("Multiplication is: " + Result);
Result = object1.Division();
console.log("Division is: " + Result);
console.log("Object 2");
Result = object2.Addition();
console.log("Addition is: " + Result);
Result = object2.Subtraction();
console.log("Subtraction is: " + Result);
Result = object2.Multiplication();
console.log("Multiplication is: " + Result);
Result = object2.Division();
console.log("Division is: " + Result);
