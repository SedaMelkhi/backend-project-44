#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'
import { calcGame } from '../src/games/calc.js'

const { rules, generateQuestionAndAnswer } = calcGame()

runGameEngine(rules, generateQuestionAndAnswer)
