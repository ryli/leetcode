export default maxArea

function maxArea(heightList) {
  let maxValue = 0
  let leftSide = 0
  let rightSide = heightList.length - 1

  while (leftSide < rightSide) {
    const value = Math.min(heightList[leftSide], heightList[rightSide]) * (rightSide - leftSide)
    if (value > maxValue) maxValue = value

    // 移动较短线段的指针
    if (heightList[leftSide] < heightList[rightSide]) {
      leftSide += 1
    } else {
      rightSide -= 1
    }
  }

  return maxValue
}


function maxArea1(heightList) {
  let maxValue = 0

  for (let i = 0; i < heightList.length; i++) {
    for (let j = i + 1; j < heightList.length; j++){
      const length = j - i
      const height = heightList[j] < heightList[i] ? heightList[j] : heightList[i]
      const value = length * height
      if (value > maxValue) maxValue = value
    }
  }

  return maxValue
}
