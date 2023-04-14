/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const rankedArr = [...new Set(arr)].sort((a, b) => a - b);
    return arr.map(val => rankedArr.indexOf(val)+1)
};