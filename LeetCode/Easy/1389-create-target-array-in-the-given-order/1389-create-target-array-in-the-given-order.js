/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = [];
    
    nums.forEach((val, i) => target.splice(index[i], 0, val))
    
    return target
};