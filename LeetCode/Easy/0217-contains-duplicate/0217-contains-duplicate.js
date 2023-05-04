/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const counter = {};
    for (const num of nums){
        if (counter[num]) return true;
        counter[num] = 1;
    }
    
    return false
};