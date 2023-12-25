const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let currCount = 1
  let encodedStr = ''
  let encodedCurr
  let prevChar = str[0]
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i-1]) {
      currCount++
    } else {
      encodedCurr = currCount > 1 ? `${currCount}${prevChar}` : prevChar
      encodedStr += encodedCurr
      currCount = 1
    }
    prevChar = str[i]
    if (i === str.length - 1) {
      encodedCurr = currCount > 1 ? `${currCount}${prevChar}` : prevChar
      encodedStr += encodedCurr
    }
  }
  return encodedStr
}

module.exports = {
  encodeLine
};
