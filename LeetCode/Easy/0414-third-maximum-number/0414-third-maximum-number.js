/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const set = [...new Set(nums)].sort((a, b) => b - a);
    return set.length >= 3 ? set[2] : set[0];
};