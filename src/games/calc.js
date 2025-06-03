import { getRandomInt } from '../getRandomInt.js'

export const calculate = (a, b, op) => {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator: ${op}`)
  }
}

export const calcGame = () => {
  const generateQuestionAndAnswer = () => {
    const firstNum = getRandomInt(0, 100)
    const secondNum = getRandomInt(0, 100)
    const operations = ['+', '-', '*']
    const actionSymbol = operations[getRandomInt(0, operations.length - 1)]
    return {
      question: `${firstNum} ${actionSymbol} ${secondNum}`,
      correctAnswer: String(calculate(firstNum, secondNum, actionSymbol)) }
  }

  const rules = 'What is the result of the expression?'

  return { rules, generateQuestionAndAnswer }
}
