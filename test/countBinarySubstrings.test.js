import countBinarySubstrings from '../code/countBinarySubstrings'

test('00110011 should get 6', () => {
  expect((countBinarySubstrings('00100101'))).toBe(5)
})
