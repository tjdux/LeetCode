/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
    const expected = heights.slice().sort((a, b) => a - b);
    return heights.filter((val, i) => val !== expected[i]).length;
};