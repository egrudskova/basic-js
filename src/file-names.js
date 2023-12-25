const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return names
  }

  let filesCounts = {}
  let element
  let firstElemInd
  for (let i = 0; i < names.length; i++) {
    element = names[i]
    firstElemInd = names.indexOf(element)
    if (firstElemInd < i && firstElemInd !== -1) {
      filesCounts[element] = (filesCounts[element] || 0) + 1
      element += `(${filesCounts[element]})`
    }
    names[i] = element
  }

  return names
}

module.exports = {
  renameFiles
};
