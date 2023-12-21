const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */


/**
--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next duplicates the next element of the array in the transformed array.
--double-prev duplicates the previous element of the array in the transformed array.
    For example:

    transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]

transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]

The function must not affect inital array. Control sequences are applied from left to right to initial array elements.
Control sequences do not fall into the transformed array. Control sequences in initial array don't occur in a row.
If there is no element next to the control sequence to which it can be applied in the initial array, or this element was previously deleted, it does nothing.
The function should throw an Error with message 'arr' parameter must be an instance of the Array! if the arr is not an Array.
*/

function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!")
  let resultArr = []
  let arrCopy = arr.slice(0)
  for (let i = 0; i < arrCopy.length; i++) {
    switch (arrCopy[i]) {
      case '--discard-next':
        if (i + 2 < arrCopy.length) {
          arrCopy = arrCopy.slice(0, i).concat(arrCopy.slice(i + 2, arrCopy.length))
        }
        break;
      case '--discard-prev':
        if (resultArr.length > 0) {
          resultArr.pop()
        }
        break;
      case '--double-next':
        if (i + 1 < arrCopy.length) {
          resultArr.push(arrCopy[i+1])
        }
        break;
      case '--double-prev':
        if (i > 0) {
          resultArr.push(arrCopy[i-1])
        }
        break;
      default:
        resultArr.push(arrCopy[i])
    }
  }
  return resultArr
}

module.exports = {
  transform
};
