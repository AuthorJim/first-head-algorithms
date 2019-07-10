import letterCombinations from '../code/letterCombinations'

test('23 should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
  expect((letterCombinations('23'))).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})
