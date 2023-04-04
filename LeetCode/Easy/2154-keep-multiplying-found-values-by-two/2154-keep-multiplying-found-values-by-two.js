/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let n = original;
    while (nums.includes(n)) {
        n *= 2;
    }
    
    return n
};