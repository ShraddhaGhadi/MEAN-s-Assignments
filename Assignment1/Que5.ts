function Fibonacci(num : number) : void
{
    var x = 1, y = 1;
    console.log(x);
    for(var i = 2; y <= num; i++){
        console.log(y);
        var next = x + y;
        x = y;
        y = next;
        
        }
}
console.log(Fibonacci(21));
