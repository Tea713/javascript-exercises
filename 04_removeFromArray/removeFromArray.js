const removeFromArray = function(array, ...toBeRemoved) {
    return array.filter((item) => { return !toBeRemoved.includes(item)});
};

// Do not edit below this line
module.exports = removeFromArray;
