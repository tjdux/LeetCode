/**
 * @param {number} n
 * @return {number}
 */
const alternateDigitSum = function(n) {
    return [...String(n)].reduce((acc, val, i) => i % 2 === 0 ? acc + Number(val) : acc - Number(val), 0);
};