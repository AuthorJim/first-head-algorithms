function canPlaceFlowers (flowerbed, n) {
  for (let i = 0; i < flowerbed.length;) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      i += 2
      n--
    } else {
      i++
    }
  }

  return n <= 0
}

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2))

// export default canPlaceFlowers
