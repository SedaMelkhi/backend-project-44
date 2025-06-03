#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'
import { progressionGame } from '../src/games/progression.js'

const { rules, generateQuestionAndAnswer } = progressionGame()

runGameEngine(rules, generateQuestionAndAnswer)
