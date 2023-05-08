/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let result = 0;
    
    words.forEach(word => {
        for (let i = 0; i < word.length; i++){
            if (word[i] !== pref[i]) break;
            if (i === pref.length-1){
                ++result;
                break;
            }
        }
    })
    
    return result;
};