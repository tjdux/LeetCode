/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = function(title) {
    return title
            .split(' ')
            .map(val => val.length <= 2 ? val.toLowerCase() : val[0].toUpperCase() + val.slice(1).toLowerCase())
            .join(' ')
};