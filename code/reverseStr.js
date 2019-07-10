function reverseStr (str) {
  return [...str].reverse().join('').split(' ').reverse().join(' ')
}

export default reverseStr
