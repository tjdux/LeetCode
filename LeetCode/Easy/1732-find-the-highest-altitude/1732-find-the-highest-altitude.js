/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
    const altitudes = [0];
    gain.forEach((val, i) => altitudes.push(val + altitudes[i]));
    return Math.max(...altitudes)
};