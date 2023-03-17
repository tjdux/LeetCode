/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function(nums) {
    return nums.map((_, i, arr) => arr[arr[i]])
};