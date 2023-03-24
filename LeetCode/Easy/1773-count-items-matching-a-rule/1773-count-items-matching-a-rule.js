/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function(items, ruleKey, ruleValue) {
    let rule;
    switch (ruleKey) {
        case 'type':
            rule = 0;
            break;
        case 'color':
            rule = 1;
            break;
        case 'name':
            rule = 2;
            break;
    }
    
    return items.filter(item => item[rule] === ruleValue).length
};