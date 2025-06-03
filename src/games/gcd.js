import { getRandomInt } from '../getRandomInt.js'

const findGcd = (firstNum, secondNum) => {
  let correctAnswer = 1
  for (let i = 1; i <= firstNum; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      correctAnswer = i
    }
  }
  return correctAnswer
}

export const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.'
  const generateQuestionAndAnswer = () => {
    const firstNum = getRandomInt(0, 100)
    const secondNum = getRandomInt(0, 100)
    const question = `${firstNum} ${secondNum}`
    return { question, correctAnswer: String(findGcd(firstNum, secondNum)) }
  }
  return { rules, generateQuestionAndAnswer }
}
