import assign from '../src/assign'

test ('assign', () => {
  var defaults = {a: 1, b: 2}
  var config = {c: 3, a: 4}
  var expected = Object.assign({}, defaults, config)
  var result = assign(defaults, config)
  expect(result).toEqual(expected)
})

test ('falsy', () => {
  var defaults = {a: true, b: 2, c: 'teste'}
  var config = {a: false, b: null, c: ''}
  var expected = Object.assign({}, defaults, config)
  var result = assign(defaults, config)
  expect(result).toEqual(expected)
})
