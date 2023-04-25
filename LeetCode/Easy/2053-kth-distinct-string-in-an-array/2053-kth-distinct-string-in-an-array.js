/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const frequencyCounts = {};
    
    for (const char of arr){
        frequencyCounts[char] = (frequencyCounts[char] || 0) + 1;
    }
    
    const distinctStrings = [];
    
    for (const key in frequencyCounts){
        if (frequencyCounts[key] === 1) distinctStrings.push(key)
    }
    
    return distinctStrings.length >= k ? distinctStrings[k-1] : ''
};