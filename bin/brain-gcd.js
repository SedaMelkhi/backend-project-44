#!/usr/bin/env node
import runGameEngine from '../src/gameEngine.js'
import { gcdGame } from '../src/games/gcd.js'

const { rules, generateQuestionAndAnswer } = gcdGame()

runGameEngine(rules, generateQuestionAndAnswer)
