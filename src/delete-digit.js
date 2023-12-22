const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('')
  const maxNumbers = []
  let maxNumber
  for (let i = 0; i < arr.length; i++) {
    maxNumbers.push(Number(arr.slice(0, i).concat(arr.slice(i + 1)).join('')))
  }
  return maxNumbers.sort((a, b) => b - a)[0]
}

module.exports = {
  deleteDigit
};
