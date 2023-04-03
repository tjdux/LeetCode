/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const output = [];
    for (let i = 0; i < matrix[0].length; i++){
        const row = [];
        for (let j = 0; j < matrix.length; j++){
            row.push(matrix[j][i]);
        }
        output.push(row);
    }
    
    return output;
};