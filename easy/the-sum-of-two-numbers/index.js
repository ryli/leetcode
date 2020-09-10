export default function twoSum(nums, target) {
  const validNums = []
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]

    for (let j = 0; j < validNums.length; j++) {
      if (val + validNums[j].val === target) {
        result.push(validNums[j].i, i)
        break
      }
    }

    if (result.length) break

    validNums.push({ val, i })
  }

  return result
}
