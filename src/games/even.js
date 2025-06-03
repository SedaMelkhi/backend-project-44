import { getRandomInt } from '../getRandomInt.js'

const isEven = num => num % 2 === 0

export const evenGame = () => {
  const generateQuestionAndAnswer = () => {
    const num = getRandomInt(0, 100)
    const correctAnswer = isEven(num) ? 'yes' : 'no'
    return { question: num, correctAnswer }
  }

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
  return { rules, generateQuestionAndAnswer }
}
