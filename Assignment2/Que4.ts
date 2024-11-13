var ChkArmstrong = (num: number): string => {
    var sum = 0;
    var ogNum = num;
    for (var temp = num; temp > 0; temp = Math.floor(temp / 10))
    {
        var digit = temp % 10;
        sum += digit * digit * digit;
    }
    if (sum === ogNum)
    {
        return "It is Armstrong number";
    } else
    {
        return "It is not Armstrong number";
    }
};

console.log(ChkArmstrong(153));