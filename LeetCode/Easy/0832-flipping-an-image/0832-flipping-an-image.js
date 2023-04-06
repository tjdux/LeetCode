/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map(row => row.reverse().map(val => val === 0 ? 1 : 0))
};