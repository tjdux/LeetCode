/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    const ranksFrequency = {};
    
    for (const rank of ranks){
        ranksFrequency[rank] = (ranksFrequency[rank] || 0) + 1
    }
    
    if (new Set(suits).size === 1){
        return 'Flush'
    } else {
        const rankFrequencies = Object.values(ranksFrequency);
        if (rankFrequencies.filter(val => val >= 3).length >= 1){
            return 'Three of a Kind'
        } else if (rankFrequencies.includes(2)) {
            return 'Pair'
        } else {
            return 'High Card'
        }
    }
};