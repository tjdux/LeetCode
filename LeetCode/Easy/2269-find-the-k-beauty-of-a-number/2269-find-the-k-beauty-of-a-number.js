/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let result = 0;
    const numStr = String(num);
    
    let substr = numStr.slice(0, k);
    if (num % substr === 0) ++result;
    
    for (let i = k; i < numStr.length; i++){
        substr = substr.substring(1);
        substr += numStr[i]
        if (num % substr === 0) ++result
    }
    
    return result
};