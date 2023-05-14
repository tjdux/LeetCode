/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let result = arr.reduce((acc, val) => acc + val, 0);
    let oddLength = 3;
    
    while (oddLength <= arr.length){
        let sum = 0;
        for (let i = 0; i < oddLength; i++){
            sum += arr[i]
        }
        
        result += sum;
        
        for (let i = oddLength; i < arr.length; i++){
            sum = sum + arr[i] - arr[i - oddLength];
            result += sum
        }
        
        oddLength += 2
    }
    
    return result
};