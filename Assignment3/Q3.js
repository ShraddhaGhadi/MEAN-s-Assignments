var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(rad, PI) {
        if (PI === void 0) { PI = 3.14; }
        this.Radius = rad;
        this.PI = PI;
    }
    Circle.prototype.Area = function () {
        var areaOfCircle = this.PI * this.Radius * this.Radius;
        return areaOfCircle;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        return 2 * this.PI * this.Radius;
    };
    return CircleX;
}(Circle));
var o1 = new CircleX(10, 3.14);
var o2 = new CircleX(20, 3.14);
var Result = o1.Circumference();
console.log("Circumference of circle is :" + Result);
var Result = o2.Circumference();
console.log("Circumference of circle is :" + Result);
