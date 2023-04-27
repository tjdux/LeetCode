/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0
    return n === 1 ? 1 : fib(n - 1) + fib(n - 2)
};