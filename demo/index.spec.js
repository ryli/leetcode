import main from './index'

const caseList = [
  {
    args: [1, 1],
    ret: 2
  },

]

describe('test', () => {
  for (const { args, ret } of caseList) {
    const title = `args: ${JSON.stringify(args)}, ret: ${JSON.stringify(ret)}`
    test(title, () => {
      expect(main(...args)).toEqual(ret)
    })
  }
})
