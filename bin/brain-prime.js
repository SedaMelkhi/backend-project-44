#!/usr/bin/env node
import { playRound } from '../src/playRound.js'
import { getName } from '../src/cli.js'

const brainPrime = (name, count = 0) => {
  const randomNumber = Math.round(Math.random() * 100)
  if (count === 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
  }
  let correctAnswer = 'yes'
  for (let i = 2; i < randomNumber; i++) {
    if (randomNumber % i === 0) {
      correctAnswer = 'no'
      break
    }
  }
  playRound({
    question: randomNumber,
    correctAnswer,
    count,
    name,
    func: brainPrime,
  })
}

const startGame = () => {
  console.log('Welcome to the Brain Games!')
  brainPrime(getName())
}

startGame()
