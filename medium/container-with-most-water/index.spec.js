import main from './index'

const caseList = [
  {
    args: [1,8,6,2,5,4,8,3,7],
    ret: 49,
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
