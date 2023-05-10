/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const adivse = candyType.length / 2;
    const types = new Set(candyType);
    
    return Math.min(adivse, types.size)
}