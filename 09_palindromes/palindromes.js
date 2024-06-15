const palindromes = function (pal) {
    let palindrome = pal.toLowerCase();
    let low = 0, high = pal.length - 1;
    while(low < high) {
        while(!(palindrome.charCodeAt(low) > 96 && palindrome.charCodeAt(low) < 123) && !(palindrome.charCodeAt(low) > 47 && palindrome.charCodeAt(low) < 58)) {
            low++;
        }
        while(!(palindrome.charCodeAt(high) > 96 && palindrome.charCodeAt(high) < 123) && !(palindrome.charCodeAt(high) > 47 && palindrome.charCodeAt(high) < 58)) {
            high--;
        }
        if(palindrome[low] !== palindrome[high]) {
            return false;
        }
        low++;
        high--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
