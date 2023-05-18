/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = [];
    
    for (let i = 0; i <= (nums.length - 2) / 2; i++){
        for (let j = 1; j <= nums[2 * i]; j++){
            result.push(nums[2 * i + 1])
        }
    }
    
    return result
};