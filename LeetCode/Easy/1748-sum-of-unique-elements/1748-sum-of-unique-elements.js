/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const frequencyCount = {};
    let result = 0
    
    for (const num of nums){
        frequencyCount[num] = (frequencyCount[num] || 0) + 1
    }
    
    for (const key in frequencyCount){
        if (frequencyCount[key] === 1) result += Number(key)
    }
    
    return result
};