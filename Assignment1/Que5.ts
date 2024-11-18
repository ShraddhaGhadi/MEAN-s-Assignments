// Write a typescript program which contains one function named as Fibonacci. 
// That function accept one number from user and print Fibonacci series till that number

function Fibonacci(num : number) : void
{
    var x = 0, y = 1;
    console.log(x);
    for(var i = 2; y <= num; i++){
        console.log(y);
        var next = x + y;
        x = y;
        y = next;

        }
}
console.log(Fibonacci(21));
