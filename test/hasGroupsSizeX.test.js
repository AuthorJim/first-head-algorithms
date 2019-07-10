import hasGroupsSizeX from '../code/hasGroupsSizeX'

test('hasGroupsSizeX: [1, 1, 1, 2, 2, 2, 3, 3] ', () => {
  expect((hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]))).toBe(false)
})
