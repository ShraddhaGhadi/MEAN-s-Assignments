function DisplayFactors(num : number) : void
{
    for(var i = 1; i <= num; i++){
        if(num % i == 0){
            console.log(i);
        }
    }
}
var factor = DisplayFactors(20);
console.log("Factor :" +factor);
