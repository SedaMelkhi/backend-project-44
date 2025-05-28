#!/usr/bin/env node
import { playRound } from '../src/playRound.js'
import { getName } from '../src/cli.js'

const brainEvenGame = (name, count = 0) => {
  const randomNumber = Math.round(Math.random() * 100)
  if (count === 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
  }
  playRound({
    question: randomNumber,
    correctAnswer: randomNumber % 2 === 0 ? 'yes' : 'no',
    count,
    name,
    func: brainEvenGame,
  })
}

const startGame = () => {
  console.log('Welcome to the Brain Games!')
  brainEvenGame(getName())
}

startGame()
