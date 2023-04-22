/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numInStr = String(x);
    
    let left = 0;
    let right = numInStr.length - 1;
    
    while (left < right){
        if (numInStr[left] === numInStr[right]){
            ++left;
            --right;
        } else {
            return false
        }
    }
    
    return true
};