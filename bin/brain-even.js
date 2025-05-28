#!/usr/bin/env node
import readlineSync from 'readline-sync'

const brainEvenGame = (name, count = 0) => {
  const randomNumber = Math.round(Math.random() * 100)
  if (count === 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
  }
  console.log(`Question: ${randomNumber}`)
  const userAnswer = readlineSync.question('Your answer: ')
  const currectAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'
  if (userAnswer === currectAnswer) {
    console.log('Correct!')
    if (count < 2) {
      brainEvenGame(name, count + 1)
    }
    else {
      console.log(`Congratulations, ${name}!`)
    }
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currectAnswer}'.\nLet's try again, ${name}!`)
  }
}

const getName = () => {
  const name = readlineSync.question('May I have your name?: ')
  console.log(`Hello, ${name}!`)
  return name
}

const startGame = () => {
  console.log('Welcome to the Brain Games!')
  brainEvenGame(getName())
}

startGame()
