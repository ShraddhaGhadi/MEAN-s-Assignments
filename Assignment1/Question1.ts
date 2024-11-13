function Maximum(val1:number, val2:number, val3:number): number{
var maxNum : number = val1;
if(val2 > maxNum){
    maxNum = val2;
}
return maxNum
}

var MaxNum = Maximum(23,89,6);

console.log("Maximum num is : " +MaxNum);
