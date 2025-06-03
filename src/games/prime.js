import { getRandomInt } from '../getRandomInt.js'

const isPrime = (num) => {
  if (num == 1 || num == 0)
    return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export const primeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  const generateQuestionAndAnswer = () => {
    const randomNumber = getRandomInt(0, 100)
    return { question: randomNumber, correctAnswer: isPrime(randomNumber) ? 'yes' : 'no' }
  }
  return { rules, generateQuestionAndAnswer }
}
