// function grayCode (n) {
//   function make (n) {
//     if (n === 0) {
//       return ['0']
//     } else if (n === 1) {
//       return ['0', '1']
//     } else {
//       const prev = make(n - 1)
//       const max = Math.pw
//       const result = Array.from(max)
//     }
//   }
// }

// console.log(grayCode(4))

// 冒泡排序

function sortArray (arr) {
  const res = [...arr]
  let max = 0
  for (let i = res.length - 1, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = res[j]
      if (tmp > res[j + 1]) {
        res[j] = res[j + 1]
        res[j + 1] = tmp
      }
      if (res[j + 1] - tmp > max) {
        max = res[j + 1] - tmp
      }
    }
  }
  return max
}

// function selectSortArray (arr) {
//   const res = [...arr]
//   for (let i = 0, min; i < res.length; i++) {
//     min = res[i]
//     for (let j = i + 1; j < res.length; j++) {
//       if (res[j] < min) {
//         let c = min
//         min = res[j]
//         res[j] = c
//       }
//     }
//     res[i] = min
//   }
//   return res
// }

// function maximumGap (arr) {
//   if (arr.length < 2) {
//     return 0
//   }
//   const sortedArr = arr.sort()

//   let delta = 0

//   for (let i = 0, tmp; i < sortedArr.length; i++) {
//     tmp = sortedArr[i + i] - sortedArr[i]
//     if (tmp - delta > 0) {
//       delta = tmp
//     }
//     // if (sortedArr[i + i] - sortedArr[i] > 0) {
//     //   max = sortedArr[i + i]
//     // } else {
//     //   max = sortedArr[i]
//     // }
//   }

//   return delta
// }

// console.log(maximumGap([2, 87, 3, 66, 75, 3, 64, 778, 33, 1]))

function greyCode (n) {
  const recycle = function (n) {
    if (n === 0) {
      return ['0']
    }
    if (n === 1) {
      return ['0', '1']
    } else {
      const max = Math.pow(n, 2)
      const res = Array.from(max)
      const prev = recycle(n - 1)
      for (let i = 0; i < prev.length; i++) {
        res[i] = `0${prev[i]}`
        res[max - 1 - i] = `1${prev[i]}`
      }
      return res
    }
  }

  return recycle(n).map(v => parseInt(v, 2))
}

function canPlaceFlower (flowerbed, n) {
  let sum = 0
  flowerbed.push(0)
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0 && flowerbed[1] === 0) {
        sum++
        i++
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        sum++
        i++
      }
    }
  }

  return sum >= n
}
