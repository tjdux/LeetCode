/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRigthDifference = function(nums) {
    const leftSum = [0];
    const rightSum = [0];
    let sum = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        sum += nums[i];
        leftSum.push(sum)
    }
    
    sum = 0;
    
    for (let i = nums.length-1; i >= 1; i--) {
        sum += nums[i];
        rightSum.unshift(sum);
    }
    
    return leftSum.map((val, i) => Math.abs(val - rightSum[i]))
};