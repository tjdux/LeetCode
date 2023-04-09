/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const numberOfPositives = nums.filter(num => num > 0).length;
    const numberOfNegatives = nums.filter(num => num < 0).length;
    
    return Math.max(numberOfPositives, numberOfNegatives)
};