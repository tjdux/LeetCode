/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = function(sentences) {
    return Math.max(...sentences.map(sentence => sentence.split(' ').length))
};