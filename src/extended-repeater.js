const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 *
 * str is a string to repeat;
 * options is an object of options, that contains properties:
 * repeatTimes sets the number of repetitions of the str;
 * separator is a string separating repetitions of the str;
 * addition is an additional string that will be added to each repetition of the str;
 * additionRepeatTimes sets the number of repetitions of the addition;
 * additionSeparator is a string separating repetitions of the addition.
 * The str and addition parameters are strings by default. In case when type of these parameters is different, they must be converted to a string.
 *
 * separator and additionSeparator parameters are strings.
 *
 * repeatTimes and additionRepeatTimes are integer numbers (in the absence of any of them, the corresponding string is not repeated).
 *
 * The only indispensable parameter is str, any others may be not defined. separator default value is '+'. additionSeparator default value is '|'.
 *
 * For example: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 */
function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  const additionsArray = []
  for (let i = 0; i < additionRepeatTimes; i++){
    additionsArray.push(String(addition))
  }
  let innerStr = String(str) + additionsArray.join(additionSeparator)

  const outerStr = []
  for (let i = 0; i < repeatTimes; i++) {
    outerStr.push(innerStr)
  }

  return outerStr.join(separator)
}

module.exports = {
  repeater
};
