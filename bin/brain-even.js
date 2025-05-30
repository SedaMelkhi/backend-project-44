#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'

const brainEven = () => {
  const generateQuestionAndAnswer = () => {
    const question = Math.round(Math.random() * 100)
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no'
    return { question, correctAnswer }
  }

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

  runGameEngine(rules, generateQuestionAndAnswer)
}

brainEven()
