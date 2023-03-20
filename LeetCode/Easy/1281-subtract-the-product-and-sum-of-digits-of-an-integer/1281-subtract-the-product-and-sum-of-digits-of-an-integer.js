/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
    const arr = [...String(n)].map(val => Number(val));
    return arr.reduce((product, val) => product * val, 1) - arr.reduce((acc, val) => acc + val, 0);
};
