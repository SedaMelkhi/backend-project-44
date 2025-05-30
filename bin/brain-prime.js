#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'

const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  const generateQuestionAndAnswer = () => {
    const randomNumber = Math.round(Math.random() * 100)
    let correctAnswer = randomNumber > 1 ? 'yes' : 'no'
    for (let i = 2; i < randomNumber; i++) {
      if (randomNumber % i === 0) {
        correctAnswer = 'no'
        break
      }
    }
    return { question: randomNumber, correctAnswer }
  }
  runGameEngine(rules, generateQuestionAndAnswer)
}

brainPrime()
