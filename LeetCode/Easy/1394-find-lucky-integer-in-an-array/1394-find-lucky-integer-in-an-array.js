/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const frequency = arr.map(num => arr.filter(val => val === num).length);
    const luckyInts = arr.filter((val, i) => val === frequency[i]);
    
    return luckyInts.length === 0 ? -1 : Math.max(...luckyInts)
};