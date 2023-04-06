/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set = [...new Set(nums)].sort((a, b) => a - b);
    const output = [];
    for (let i = 1; i <= nums.length; i++){
        if (!set.includes(i)) output.push(i);
    }
    
    return output;
};