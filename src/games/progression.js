import { getRandomInt } from '../getRandomInt.js'

const buildProgression = (length, first, step) => Array.from({ length }, (_, i) => first + i * step)

export const progressionGame = () => {
  const rules = 'What number is missing in the progression?'
  const generateQuestionAndAnswer = () => {
    const lengthProgression = getRandomInt(5, 10)
    const firstNumber = getRandomInt(0, 100)
    const stepProgression = getRandomInt(0, 10)
    const progressionNumbers = buildProgression(lengthProgression, firstNumber, stepProgression)
    const replaceNumberIdx = getRandomInt(0, lengthProgression - 1)
    const correctAnswer = String(progressionNumbers[replaceNumberIdx])
    progressionNumbers[replaceNumberIdx] = '..'
    return { question: `${progressionNumbers.reduce((acc, item) => acc + `${item} `, '')}`, correctAnswer }
  }
  return { rules, generateQuestionAndAnswer }
}
