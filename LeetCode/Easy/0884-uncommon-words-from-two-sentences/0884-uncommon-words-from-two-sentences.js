/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const s1Arr = s1.split(' ');
    const filteredS1Arr = s1Arr.filter(word => s1Arr.indexOf(word) === s1Arr.lastIndexOf(word));
    
    const s2Arr = s2.split(' ');
    const filteredS2Arr = s2Arr.filter(word => s2Arr.indexOf(word) === s2Arr.lastIndexOf(word));
    
    return filteredS1Arr.filter(word => !s2Arr.includes(word)).concat(filteredS2Arr.filter(word => !s1Arr.includes(word)))
};