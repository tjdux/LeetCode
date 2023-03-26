/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
    const sortedArr = nums.slice().sort((a, b) => a - b);
    return nums.map(num => sortedArr.indexOf(num))
};