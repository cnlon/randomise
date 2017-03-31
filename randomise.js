function randomise ({
  count = 1,
  min = 0,
  max = 100,
  precision = 0,
  join = ', '
} = {}) {
  const delta = max - min
  const array = []
  let index = count
  while (index-- > 0) {
    const number = min + Math.random() * delta
    const fixed = Number(number.toFixed(precision))
    array.push(fixed)
  }
  const result = array.join(join)
  return result
}


module.exports = randomise
