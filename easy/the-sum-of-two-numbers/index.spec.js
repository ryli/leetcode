import twoSum from './index'

const caseList = [
  {
    arg1: [2, 7, 11, 15],
    arg2: 9,
    ret: [0, 1]
  },

  {
    arg1: [2, 11, 7, 15],
    arg2: 9,
    ret: [0, 2]
  },

  {
    arg1: [11, 2,  7, 15],
    arg2: 9,
    ret: [1, 2]
  },

  {
    arg1: [11, 2,  7, 15],
    arg2: 10,
    ret: []
  },

  {
    arg1: [11, 2, -10,  7, 15, 20],
    arg2: 10,
    ret: [2, 5]
  },

  {
    arg1: [20, 11, 2, -10,  7, 15],
    arg2: 10,
    ret: [0, 3]
  },
]

describe('simple-the-sum-of-two-numbers', () => {
  for (const { arg1, arg2, ret } of caseList) {
    test(`nums=${arg1}, target=${arg2}`, () => {
      expect(twoSum(arg1, arg2)).toEqual(ret)
    })
  }
})
