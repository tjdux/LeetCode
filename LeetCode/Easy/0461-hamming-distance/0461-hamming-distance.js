/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let result = 0;
    let binaryX = x.toString(2);
    let binaryY = y.toString(2);
    
    binaryX.length < binaryY.length 
        ? binaryX = binaryX.padStart(binaryY.length, '0')
        : binaryY = binaryY.padStart(binaryX.length, '0')
    
    for (let i = 0; i < binaryX.length; i++){
        if (binaryX[i] !== binaryY[i]) ++result
    }
    
    return result
};