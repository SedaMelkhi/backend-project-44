#!/usr/bin/env node
import { playRound } from '../src/playRound.js'
import { getName } from '../src/cli.js'

const brainCalc = (name, count = 0) => {
  const firstNum = Math.round(Math.random() * 100)
  const secondNum = Math.round(Math.random() * 100)
  const actionNum = Math.round(Math.random() * 10) % 3 === 0
  const actionSymbol = actionNum % 3 === 0 ? '+' : actionNum % 3 === 1 ? '-' : '*'
  if (count === 0) {
    console.log('What is the result of the expression?')
  }
  playRound({
    question: `${firstNum} ${actionSymbol} ${secondNum}`,
    correctAnswer: String(actionSymbol === '*' ? firstNum * secondNum : actionSymbol === '+' ? firstNum + secondNum : firstNum - secondNum),
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
