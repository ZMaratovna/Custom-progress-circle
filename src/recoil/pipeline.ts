import { selector } from 'recoil'

import { IPipeline } from '../typings'

import { testsListAtom } from './tests'

export const pipelineSelector = selector({
  key: 'pipelineSelector',
  get: ({ get }) => {
    const tests = get(testsListAtom)
    const totalSize = tests.reduce((total, t) => total + t.totalSize, 0)
    const handledSize = tests.reduce((total, t) => total + t.handledSize, 0)
    const timeStarted: any = tests[0].timeStarted || new Date()
    const currentTime: any = new Date()
    const timeElapsed =
      (totalSize / handledSize - 1) * (currentTime - timeStarted)
    const progress = +(handledSize / totalSize).toFixed(2)
    const completed = totalSize === handledSize
    return {
      id: 1,
      name: 'Mocked name of pipeline',
      totalSize,
      handledSize,
      progress,
      completed,
      timeStarted,
      timeElapsed,
      tests,
    } as IPipeline
  },
})
