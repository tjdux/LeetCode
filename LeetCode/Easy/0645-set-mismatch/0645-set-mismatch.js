/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let max = -Infinity;
    const counter = {};
    let numberOccurTwice = 0;
    let missingNumber = 0;
    
    for (const num of nums){
        max = Math.max(max, num);
        counter[num] = (counter[num] || 0) + 1;
    }
    
    for (const key in counter){
        if (counter[key] === 2){
            numberOccurTwice = Number(key);
            break;
        }
    }
    
    for (let i = 1; i <= max; i++){
        if (!counter.hasOwnProperty(`${i}`)){
            missingNumber = i;
            break;
        }
    }
    
    if (missingNumber === 0) missingNumber = max + 1;
    
    return [numberOccurTwice, missingNumber]
};