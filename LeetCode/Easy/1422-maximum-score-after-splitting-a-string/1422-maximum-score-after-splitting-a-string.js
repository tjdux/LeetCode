/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    const scores = [];
    
    for (let i = 1; i < s.length; i++){
        let score = s.slice(0, i).split('').filter(num => num === '0').length + s.slice(i).split('').filter(num => num === '1').length;
        scores.push(score);
    }
    
    return Math.max(...scores)
}