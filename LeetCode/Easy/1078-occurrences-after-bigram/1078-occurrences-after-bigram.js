/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const result = [];
    const arr = text.split(' ');
    
    for (let i = 2; i < arr.length; i++){
        if (arr[i-2] === first && arr[i-1] === second) result.push(arr[i])
    }
    
    return result
};