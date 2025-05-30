#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'

const brainProgression = () => {
  const rules = 'What number is missing in the progression?'
  const generateQuestionAndAnswer = () => {
    const lengthProgression = Math.round(Math.random() * 5 + 5)
    const firstNumber = Math.round(Math.random() * 100)
    const stepProgression = Math.round(Math.random() * 10)
    const progressionNumbers = (new Array(lengthProgression).fill(0)).reduce((arr, _, idx) => idx === 0 ? [firstNumber] : [...arr, arr[idx - 1] + stepProgression], [])
    const replaceNumberIdx = Math.floor(Math.random() * lengthProgression)
    const correctAnswer = String(progressionNumbers[replaceNumberIdx])
    progressionNumbers[replaceNumberIdx] = '..'
    const question = `${progressionNumbers.reduce((acc, item) => acc + `${item} `, '')}`
    return { question, correctAnswer }
  }
  runGameEngine(rules, generateQuestionAndAnswer)
}

brainProgression()
