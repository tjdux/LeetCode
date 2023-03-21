/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
    const output = [];
    for (let i = 0; i < n; i++) {
        output.push(nums[i]);
        output.push(nums[i+n]);
    }
    
    return output
};