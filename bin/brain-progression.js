#!/usr/bin/env node
import { playRound } from '../src/playRound.js'
import { getName } from '../src/cli.js'

const brainProgression = (name, count = 0) => {
  const lengthProgression = Math.round(Math.random() * 5 + 5)
  const firstNumber = Math.round(Math.random() * 100)
  const stepProgression = Math.round(Math.random() * 10)
  const progressionNumbers = (new Array(lengthProgression).fill(0)).reduce((arr, _, idx) => idx === 0 ? [firstNumber] : [...arr, arr[idx - 1] + stepProgression], [])
  const replaceNumberIdx = Math.floor(Math.random() * lengthProgression)
  const correctAnswer = String(progressionNumbers[replaceNumberIdx])
  progressionNumbers[replaceNumberIdx] = '..'
  if (count === 0) {
    console.log('What number is missing in the progression?')
  }
  playRound({
    question: `${progressionNumbers.reduce((acc, item) => acc + `${item} `, '')}`,
    correctAnswer,
    count,
    name,
    func: brainProgression,
  })
}

const startGame = () => {
  console.log('Welcome to the Brain Games!')
  brainProgression(getName())
}

startGame()
