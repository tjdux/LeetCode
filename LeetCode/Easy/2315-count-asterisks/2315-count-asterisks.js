/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let numOfBar = 0;
    let result = 0;
    
    for (const char of s){
        if (char === '|'){
            ++numOfBar;
        } else {
            if (numOfBar % 2 !== 1 && char === '*') ++result
        }
    }
    
    return result
};