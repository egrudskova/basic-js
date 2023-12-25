const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr;
  let curr
  let statsObj = {};
  domains.forEach(item => {
    let prev = '';
    arr = item.split('.');
    arr.reverse();

    for (const stat of arr) {
      curr = prev + '.' + stat;
      statsObj[curr] = (statsObj[curr] || 0) + 1;
      prev = curr;
    }
  });

  return statsObj;
}

module.exports = {
  getDNSStats
};
