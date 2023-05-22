/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const result = [];
    const sorted = [[], []];
    
    for (const num of nums){
        sorted[num % 2].push(num)
    }
    
    for (let i = 0; i < nums.length; i++){
        result.push(sorted[i % 2].pop())
    }
    
    return result
};