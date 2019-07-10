const map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

function letterCombinations (digits) {
  if (!digits) {
    return []
  }
  if (digits.length === 1) {
    return map[digits]
  }
  const arr = digits.split('').map(v => map[v])
  return getArrayLetter(arr)
}

function getArrayLetter (arr) {
  const list = [...arr]
  const result = []
  for (let i = 0; i < list[0].length; i++) {
    for (let j = 0; j < list[1].length; j++) {
      result.push(`${list[0][i]}${list[1][j]}`)
    }
  }

  list.splice(0, 2, result)

  if (list.length > 1) {
    return getArrayLetter(list)
  }

  return result
}

// console.log(letterCombinations('2'))

export default letterCombinations
