module.exports = function toReadable(number) {
    if (number == 0) return "zero";

    let ones = [
        "",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen",
    ];
    let tens = [
        "",
        "",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety",
    ];
    let hundred = " hundred";
    let strFromNum = ("" + number).split("");
    let finalNumString;

    let checkLength = function () {
        return (number + "").length;
    };

    if (checkLength() == 1) {
        finalNumString = ones[number];
    }

    if (checkLength() == 2) {
        if (number < 20) finalNumString = ones[number];
        if (number > 19) {
            finalNumString = `${tens[strFromNum[0]]}${ones[strFromNum[1]]}`;
        }
    }

    if (checkLength() == 3) {
        let numStr;
        finalNumString = `${ones[strFromNum[0]]}${hundred}`;

        let twoNums = strFromNum.slice(1).join("");

        if (twoNums.length == 2) {
            if (+twoNums < 20) numStr = ones[+twoNums];
            if (+twoNums > 19) {
                numStr = `${tens[strFromNum[1]]}${ones[strFromNum[2]]}`;
            }
        }

        finalNumString = finalNumString + numStr;
    }

    return finalNumString.trim();
};
