/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let numLetter = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === letter) ++numLetter
    }
    
    return Math.floor(numLetter / s.length * 100)
};