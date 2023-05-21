/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  let turn = false;

  for (const char of s) {
    if (char === 'b') turn = true;
    if (turn && char === 'a') return false;
  }

  return true;
};