/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt([...num.toString(2)].map(val => val === '0' ? '1' : '0').join(''), 2)
};