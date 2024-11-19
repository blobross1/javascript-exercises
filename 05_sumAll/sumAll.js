const sumAll = function(num1, num2) {
    let total = 0;
    if (num1 > 0 && num2 > 0 && typeof num1 === 'number' && typeof num2 === 'number' && num1 % 1 === 0 && num2 % 1 === 0) {
        if (num1 < num2) {
            for (i = num1 ; i <= num2 ; i++) {
                total += i
            } return total
        } else if (num1 > num2) {
            for (i = num2 ; i <= num1 ; i++) {
                total += i
            } return total
        } else {
            return 'ERROR'
        }
    } else {
        return 'ERROR'
    }
};

// num 1 < num 2
// newArr = []
// add all numbers between num1 and num2 to newArr
// sum values from the array


// largenumberfirst
// ERROR from negative, non-integer, non number


// Do not edit below this line
module.exports = sumAll;
