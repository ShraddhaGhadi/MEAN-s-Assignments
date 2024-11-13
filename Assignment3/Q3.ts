class Circle {
    Radius: number;
    PI: number;

    constructor(rad: number, PI: number = 3.14) {
        this.Radius = rad;
        this.PI = PI;
    }

    Area() {
        var areaOfCircle = this.PI * this.Radius * this.Radius;
        return areaOfCircle;
    }
}

class CircleX extends Circle {
    Circumference() {
        return 2 * this.PI * this.Radius;
    }
}

var o1 = new CircleX(10, 3.14)
var o2 = new CircleX(20, 3.14)

var Result = o1.Circumference();
console.log("Circumference of circle is :" + Result);

var Result = o2.Circumference();
console.log("Circumference of circle is :" + Result);
