const reverseString = function(text) {
    let textInArrayForm = text.split("");
    let reversedTextInStringForm = textInArrayForm.reverse().join("");
    return reversedTextInStringForm;
};

// Do not edit below this line
module.exports = reverseString;
