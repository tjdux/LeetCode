/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function(s, k) {
    return s.split(' ').filter((_, i) => i < k).join(' ');
};