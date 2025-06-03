#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'
import { evenGame } from '../src/games/even.js'

const { rules, generateQuestionAndAnswer } = evenGame()

runGameEngine(rules, generateQuestionAndAnswer)
