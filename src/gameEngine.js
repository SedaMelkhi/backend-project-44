import readlineSync from 'readline-sync'
import { startGame } from './cli.js'

const runGameEngine = (rules, generateQuestionAndAnswer) => {
  const name = startGame()
  console.log(rules)

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer (. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}

export default runGameEngine
