/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let result = 0;
    
    while (nums.length > 1){
        let concatenation = `${nums.shift()}${nums.pop()}`;
        result += Number(concatenation);
    }
    
    return nums.length ? result + nums[0] : result
};