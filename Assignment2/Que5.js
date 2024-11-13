function ChkString(str) {
    if (str.indexOf("Marvellous") !== -1) {
        return "String contains Marvellous in it.";
    }
    else {
        return "String does not contain Marvellous.";
    }
}
var inStr = "Pune Kothrud Marvellous Infosystems";
console.log(ChkString(inStr));
