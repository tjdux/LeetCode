/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = function(nums) {
    const elementSum = nums.reduce((acc, val) => acc + val, 0);
    const digitSum = nums.flatMap(val => String(val).split(''))
                         .map(val => Number(val))
                         .reduce((acc, val) => acc + val, 0);
    
    return Math.abs(elementSum - digitSum)
};