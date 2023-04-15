/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let daysOfAbsents = 0;
    let consecutiveDaysOfLate = 0;
    
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'A') ++daysOfAbsents;
        if (daysOfAbsents >= 2) return false
        
        s[i] === 'L' ? ++consecutiveDaysOfLate : consecutiveDaysOfLate = 0;
        if (consecutiveDaysOfLate >= 3) return false
    }
    
    return true
};