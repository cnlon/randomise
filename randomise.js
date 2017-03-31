/**
 * To generate random numbers.
 *
 * @param {Object} [params={}] - Params object.
 * @param {Number} [params.count=1] - The count of the random numbers. Must be greater than 0.
 * @param {Number} [params.min=0] - The minimum value (included) of the random numbers.
 * @param {Number} [params.max=100] - The maximum value (excluded) of the random numbers.
 * @param {Number} [params.precision=0] - The precision of each number.
 * @param {String} [params.separator=', '] - The separator for random numbers.
 * @return {String}
 */

function randomise ({
  count = 1,
  min = 0,
  max = 100,
  precision = 0,
  separator = ', '
} = {}) {
  const delta = max - min
  const array = []
  let index = count
  while (index-- > 0) {
    const number = min + Math.random() * delta
    const fixed = Number(number.toFixed(precision))
    array.push(fixed)
  }
  const result = array.join(separator)
  return result
}


module.exports = randomise
