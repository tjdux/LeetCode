/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(i => i.reduce((acc, val) => acc + val, 0)))
};