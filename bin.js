#!/usr/bin/env node

const randomise = require('./randomise.js')


const PARAM_ALIASES = {
  'c': 'count',
  's': 'min',
  'l': 'max',
  'p': 'precision',
  'j': 'join'
}
const NUMBER_PARAMS = new Set(['count', 'min', 'max', 'precision'])

const args = process.argv.slice(2)
const params = args.reduce((result, param) => {
  const pair = param.split('=')
  if (pair.length >= 2) {
    let key = pair[0].replace(/^-+/, '').toLowerCase()
    if (PARAM_ALIASES[key]) {
      key = PARAM_ALIASES[key]
    }
    let value = pair[1]
    if (NUMBER_PARAMS.has(key)) {
      value = parseInt(value)
    }
    result[key] = value
  }
  return result
}, {})
const result = randomise(params)
console.log(result)
