function countBinarySubstrings (s) {
  let count = 0
  for (let i = 0; i < s.length - 1; i++) {
    const m = matchStr(s.slice(i))
    if (m) {
      count++
    }
  }

  return count
}

function matchStr (s) {
  const j = s.match(/(0+|1+)/)[0]
  const o = (j[0] ^ 1).toString().repeat(j.length)
  const q = j + o
  if (s.startsWith(q)) {
    return q
  } else {
    return false
  }
}

export default countBinarySubstrings
