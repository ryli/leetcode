export default function merge(intervals) {
  let cross
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      cross = isCross(intervals[i], intervals[j])
      if (cross) {
        intervals[i] = cross
        intervals[j] = cross
        break
      }
    }
    if (cross) {
      break
    }
  }
  if (cross) {
    return merge(uniqArr(intervals))
  } else {
    return uniqArr(intervals)
  }
}

function uniqArr(intervals) {
  const ret = []
  intervals.forEach(arr => {
    const arrStr = JSON.stringify(arr)
    if (!ret.includes(arrStr)) ret.push(arrStr)
  })
  return ret.map(v => JSON.parse(v))
}

function isCross (a, b) {
  const startA = a[0]
  const endA = a[a.length - 1]
  const startB = b[0]
  const endB = b[b.length - 1]

  if (startA >= startB) {
    if (endB < startA) {
      return false
    } else if (endA >= endB) {
      return [startB, endA]
    } else if (endB >= endA) {
      return b
    } else {
      console.log(1)
    }
  } else {
    if (endA < startB) {
      return false
    } else if (endB >= endA) {
      return [startA, endB]
    } else if (endA >= endB) {
      return a
    } else {
      console.log(2)
    }
  }

  return false
}
