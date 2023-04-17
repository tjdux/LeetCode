/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const quarter = arr.length * 0.25;
    const frequencyCounter = {};
    
    for (const num of arr){
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1
    }
    
    for (const key in frequencyCounter){
        if (frequencyCounter[key] > quarter) return key
    }
};