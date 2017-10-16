import directive from '../src/directive'

test ('should not throw error on empty config', () => {
  expect(() => directive({}, {})).not.toThrow()
})
