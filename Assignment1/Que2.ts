function Area(radius : number,PI : number = 3.14) : number
{
var area = PI * radius * radius;
return area;
}

var areaOfCircle = Area(5);
console.log("Area of circle is : " +areaOfCircle);

