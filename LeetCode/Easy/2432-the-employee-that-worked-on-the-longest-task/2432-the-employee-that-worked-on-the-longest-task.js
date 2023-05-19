/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let longestTime = logs[0][1];
    let result = logs[0][0];
    
    for (let i = 1; i < logs.length; i++){
        const unitOfTime = logs[i][1] - logs[i-1][1];
        if (unitOfTime >= longestTime){
            result = unitOfTime > longestTime ? logs[i][0] : Math.min(result, logs[i][0]);
            longestTime = unitOfTime;
        }
    }
    
    return result
};