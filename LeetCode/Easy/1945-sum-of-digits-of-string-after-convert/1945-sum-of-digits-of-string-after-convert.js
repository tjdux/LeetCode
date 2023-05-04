/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    const convertedS = s.split('').map(char => char.charCodeAt(0) - 96).join('');
    
    let sum = convertedS;
    
    while (k !== 0){
        --k;
        sum = String(sum).split('').reduce((acc, val) => acc + Number(val), 0);
    }
    
    return sum
};