function reverseStr (str) {
  const arr = str.split(' ')
  const result = arr.map(v => v.split('').reverse().join(''))
  return result.join(' ')
}

export default reverseStr
