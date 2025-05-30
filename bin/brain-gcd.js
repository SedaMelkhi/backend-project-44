#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'

const brainCalc = () => {
  const rules = 'Find the greatest common divisor of given numbers.'
  const generateQuestionAndAnswer = () => {
    const firstNum = Math.round(Math.random() * 100)
    const secondNum = Math.round(Math.random() * 100)
    const question = `${firstNum} ${secondNum}`
    let correctAnswer = 1
    for (let i = 0; i <= firstNum; i++) {
      if (firstNum % i === 0 && secondNum % i === 0) {
        correctAnswer = String(i)
      }
    }
    return { question, correctAnswer }
  }
  runGameEngine(rules, generateQuestionAndAnswer)
}

brainCalc()
