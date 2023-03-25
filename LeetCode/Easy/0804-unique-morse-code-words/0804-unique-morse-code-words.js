/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    return new Set(words.map((word) => 
                     word
                        .split('')
                        .flatMap(char => morseCode[char.charCodeAt(0)-97])
                        .join('')
                    )).size
};