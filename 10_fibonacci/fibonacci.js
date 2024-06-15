const fibonacci = function(x) {
    if(typeof x === "string") {
        x = parseInt(x);
    }
    if(x < 0) {
        return "OOPS";
    }
    let a = 0;
    let b = 1;
    while(x-- > 0) {
        b = a + b;
        a = b - a;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
