/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = function(s) {
    const shift = (char, num) => String.fromCharCode(char.charCodeAt(0) + num);
    
    const arr = s.split('');
    for (let i = 1; i < arr.length; i += 2) arr[i] = shift(arr[i-1], Number(arr[i]))
    
    return arr.join('')
};