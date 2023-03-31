/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const a = Math.max(...nums);
    const b = Math.min(...nums);
    const gcd = (x, y) => x % y === 0 ? y : gcd(y, x % y)
    return gcd(a, b)
};