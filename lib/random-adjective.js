const adjectives = require('adjectives')
const randomNumber = require('random-number-in-range')

module.exports = function randomAdjective () {
  return adjectives[randomNumber(0, adjectives.length - 1)]
}
