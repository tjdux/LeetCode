/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const chIndex = word.indexOf(ch);
    return word.slice(0, chIndex+1).split('').reverse().join('') + word.slice(chIndex+1)
};