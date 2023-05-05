/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const counter = {};
    
    for (const char of s){
        if (counter[char]) return char;
        counter[char] = 1;
    }
};