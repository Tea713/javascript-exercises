const sumAll = function(start, end) {
    if(typeof start != "number" || typeof end != "number" || start < 0 || end < 0) {
        return "ERROR";
    }
    result = 0;
    if(start > end) {
        temp = start;
        start = end;
        end = temp;
    }
    for(let i = start; i <= end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
