import readlineSync from 'readline-sync'

export const playRound = ({ question, correctAnswer, count, name, func }) => {
  console.log(`Question: ${question}`)
  const userAnswer = readlineSync.question('Your answer: ')
  if (userAnswer === correctAnswer) {
    console.log('Correct!')
    if (count < 2) {
      func(name, count + 1)
    }
    else {
      console.log(`Congratulations, ${name}!`)
    }
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
  }
}
