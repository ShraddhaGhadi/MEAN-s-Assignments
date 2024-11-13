function ChkString(str: string): string {
    if (str.indexOf("Marvellous") !== -1) {
        return "String contains Marvellous in it.";
    } else {
        return "String does not contain Marvellous.";
    }
}

const inStr = "Pune Kothrud Marvellous Infosystems";
console.log(ChkString(inStr));