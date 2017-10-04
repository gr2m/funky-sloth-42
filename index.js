module.exports = generateRandomString

const animals = require('animals')
const randomNumber = require('random-number-in-range')

const randomAdjective = require('./lib/random-adjective')

function generateRandomString (num) {
  if (typeof num === 'number') {
    return Array(num).fill().map(generateRandomString)
  }

  return [randomAdjective(), animals(), randomNumber(10, 99)].join('-')
}
