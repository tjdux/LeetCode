/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let minimalAbs = Infinity;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target){
            minimalAbs = Math.min(minimalAbs, Math.abs(i - start))
        }
    }
    
    return minimalAbs
};