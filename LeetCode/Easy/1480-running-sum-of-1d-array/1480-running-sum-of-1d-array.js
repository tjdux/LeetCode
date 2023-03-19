/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    const output = [];
    let acc = 0;
    
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
        output.push(acc);
    }
    
    return output
};