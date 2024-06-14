const reverseString = function(toReverse) {
    result = "";
    for(let i = toReverse.length - 1; i >= 0; i--) {
        result += toReverse[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
