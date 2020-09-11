import main from './index'

const caseList = [
  {
    args: [[1,3],[2,6],[8,10],[15,18]],
    ret: [[1,6],[8,10],[15,18]],
  },

  {
    args: [[1,4],[4,5]],
    ret: [[1,5]],
  },

]

describe('test', () => {
  for (const { args, ret } of caseList) {
    const title = `args: ${JSON.stringify(args)}, ret: ${JSON.stringify(ret)}`
    test(title, () => {
      expect(main(args)).toEqual(ret)
    })
  }
})
