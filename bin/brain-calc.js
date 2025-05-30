#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'

const brainCalc = () => {
  const generateQuestionAndAnswer = () => {
    const firstNum = Math.round(Math.random() * 100)
    const secondNum = Math.round(Math.random() * 100)
    const actionNum = Math.round(Math.random() * 10) % 3 === 0
    const actionSymbol = actionNum % 3 === 0 ? '+' : actionNum % 3 === 1 ? '-' : '*'
    const question = `${firstNum} ${actionSymbol} ${secondNum}`
    const correctAnswer = String(actionSymbol === '*' ? firstNum * secondNum : actionSymbol === '+' ? firstNum + secondNum : firstNum - secondNum)
    return {
      question, correctAnswer }
  }
  const rules = 'What is the result of the expression?'
  runGameEngine(rules, generateQuestionAndAnswer)
}

brainCalc()
