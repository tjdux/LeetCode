/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join('').split('0').map(num => num.length))
};