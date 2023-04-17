/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const largestInt = Math.max(...nums);
    
    for (const num of nums){
        if (num !== largestInt && num * 2 > largestInt) return -1
    }
    
    return nums.indexOf(largestInt)
};