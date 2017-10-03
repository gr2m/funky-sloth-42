const test = require('tap').test

const generateRandomString = require('../index')

test('smoke test', function (t) {
  const string = generateRandomString()
  t.is(typeof string, 'string')
  t.ok(string.length > 0)
  t.ok(/-\d{2}$/.test(string))
  t.end()
})

test('array', function (t) {
  const array = generateRandomString(3)
  t.ok(Array.isArray(array))
  t.is(array.length, 3)
  t.type(array[0], 'string')
  t.end()
})
