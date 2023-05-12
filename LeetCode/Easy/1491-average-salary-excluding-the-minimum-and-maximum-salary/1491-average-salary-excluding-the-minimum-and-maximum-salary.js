/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let acc = 0;
    let maxSalary = Math.max(...salary);
    let minSalary = Math.min(...salary);
    
    for (const val of salary){
        if (val === maxSalary || val === minSalary) continue;
        acc += val
    }
    
    return acc / (salary.length - 2)
};