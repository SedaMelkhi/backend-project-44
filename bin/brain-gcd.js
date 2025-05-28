#!/usr/bin/env node
import { playRound } from '../src/playRound.js'
import { getName } from '../src/cli.js'

const brainCalc = (name, count = 0) => {
  const firstNum = Math.round(Math.random() * 100)
  const secondNum = Math.round(Math.random() * 100)
  if (count === 0) {
    console.log('Find the greatest common divisor of given numbers.')
  }
  let correctAnswer = 1
  for (let i = 0; i <= firstNum; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      correctAnswer = String(i)
    }
  }
  playRound({
    question: `${firstNum} ${secondNum}`,
    correctAnswer,
    count,
    name,
    func: brainCalc,
  })
}

const startGame = () => {
  console.log('Welcome to the Brain Games!')
  brainCalc(getName())
}

startGame()
