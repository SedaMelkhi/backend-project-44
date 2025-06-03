#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'
import { primeGame } from '../src/games/prime.js'

const { rules, generateQuestionAndAnswer } = primeGame()

runGameEngine(rules, generateQuestionAndAnswer)
