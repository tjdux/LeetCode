/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if (num === 0) return true
    return String(num).slice(-1) !== '0'
};