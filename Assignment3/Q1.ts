class Arithmetic {
    Number1: number;
    Number2: number;

    constructor(n1: number, n2: number) {
        this.Number1 = n1;
        this.Number2 = n2;
    }

    Addition() {
        var Result = this.Number1 + this.Number2;
        return Result;
    }
    Subtraction() {
        var Result = this.Number1 - this.Number2;
        return Result;
    }
    Multiplication() {
        var Result = this.Number1 * this.Number2;
        return Result;
    }
    Division() {
        var Result = this.Number1 / this.Number2;
        return Result;
    }
}

var object1 = new Arithmetic(40, 10);
var object2 = new Arithmetic(50, 70);

var Result: number = 0

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
