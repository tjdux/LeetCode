/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
    return new Set(sentence).size === 26
};