const reverseString = function(string) {
    word = ""
    for (let i = string.length - 1; i >= 0; i--) {
        word += string[i]
    }
    return word
};
reverseString('hello');
// Do not edit below this line
module.exports = reverseString;
