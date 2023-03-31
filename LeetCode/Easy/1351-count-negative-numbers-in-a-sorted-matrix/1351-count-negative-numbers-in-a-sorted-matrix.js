/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
    return grid.flat().filter(val => val < 0).length;
};