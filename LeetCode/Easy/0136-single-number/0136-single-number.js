/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const set = [...new Set(nums)];
    for (let i = 0; i < set.length; i++){
        if (nums.filter(val => val === set[i]).length === 1) return set[i]
    }
};