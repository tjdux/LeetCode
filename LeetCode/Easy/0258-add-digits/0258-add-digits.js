/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
    let output = num;
    while (output >= 10) {
        output = [...String(output)].reduce((acc, val) => acc + Number(val), 0)
    }
    return output
}