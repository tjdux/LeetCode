/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            divisors.push(i);
            if (num / i !== i) divisors.push(num / i);
        }
    }
    return divisors.reduce((acc, val) => acc + val, 0) === num * 2
};