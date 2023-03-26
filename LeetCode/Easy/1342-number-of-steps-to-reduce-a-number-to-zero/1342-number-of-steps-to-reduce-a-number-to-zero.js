/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
    let output = 0;
    while (num !== 0) {
        ++output;
        num % 2 === 0 ? num /= 2 : --num;
    }
    return output
};