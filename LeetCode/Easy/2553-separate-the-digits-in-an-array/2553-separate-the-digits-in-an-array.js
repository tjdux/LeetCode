/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const answer = [];
    
    nums.forEach(num => {
        if (num < 10) {
            answer.push(num)
        } else {
            const numStr = String(num).split('');
            numStr.forEach(val => answer.push(Number(val)))
        }
    })
    
    return answer
};