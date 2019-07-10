// function hasGroupsSizeX (deck) {
//   if (deck.length < 2) {
//     return false
//   }
//   const arr = [...deck].sort((a, b) => a - b)
//   let min = Number.MAX_SAFE_INTEGER
//   const dst = []
//   let res = true
//   for (let i = 0, tmp = [], len = arr.length; i < len; i++) {
//     tmp.push(arr[i])
//     for (let j = i + 1; j < len - 1; j++) {
//       if (arr[i] === arr[j]) {
//         tmp.push(arr[j])
//       } else {
//         if (min > tmp.length) {
//           min = tmp.length
//         }
//         dst.push([].concat(tmp))
//         tmp.length = 0
//         i = j
//         break
//       }
//     }
//   }

//   dst.every(v => {
//     if (v.length % min !== 0) {
//       res = false
//       return false
//     }
//   })

//   return res
// }

// console.log(hasGroupsSizeX([0, 0, 0, 0, 0, 1, 1, 2, 3, 4]))

// export default hasGroupsSizeX
// var hasGroupsSizeX = function (deck) {
//   if (deck.length < 2) return false
//   let o = deck.reduce((current, next) => {
//     return (current[next] ? current[next]++ : current[next] = 1, current)
//   }, {})
//   let arr = Object.values(o).sort((a, b) => a - b)
//   let rest = 0
//   let dcg = (a, b) => {
//     if (b === 0) {
//       return a
//     } else {
//       return dcg(b, a % b)
//     }
//   }
//   while (arr.length > 1) {
//     rest = dcg(arr[0], arr[1])
//     arr.splice(0, 2, rest)
//   }
//   if (rest !== 1) {
//     return true
//   } else {
//     return false
//   }
// }

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i]
//     const diffIndex = nums.indexOf(diff)
//     if (diffIndex !== -1 && diffIndex !== i) {
//       return [i, diffIndex]
//     }
//   }
//   return false
// }

// function mergeArray (left, right) {
//   const res = []
//   if (left.length && right.length) {
//     res.push(left[0] < right[0] ? left.shift() : right.shift())
//   }
//   return [...new Set(res.concat(left, right))]
// }

// function repeat (num) {
// }

// String.prototype.myRepeat = (num) => {
//   if (this === '') {
//     return ''
//   }

//   let res = ''

//   for (let i = 0; i < num.length; i++) {
//     res += this
//   }

//   return res
// }

console.log('ben'.myRepeat(2))

// console.log(mergeArray([1, 2, 3], [1, 4, 8, 9]))

// console.log(twoSum([3, 2, 4], 6))

// console.log(hasGroupsSizeX([0, 0, 0, 0, 0, 1, 1, 2, 3, 4]))

// export default hasGroupsSizeX
