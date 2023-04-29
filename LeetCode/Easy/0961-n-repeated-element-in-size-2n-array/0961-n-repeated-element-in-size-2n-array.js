/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const counter = {};
    const repeatedTime = nums.length / 2;
    
    for (const num of nums){
        counter[num] = (counter[num] || 0) + 1;
        if (counter[num] === repeatedTime) return num
    }
};