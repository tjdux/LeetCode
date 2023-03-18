/**
 * @param {number} n
 * @return {number}
 */
const smallestEvenMultiple = function(n) {
    return n % 2 === 0 ? n : 2 * n
};