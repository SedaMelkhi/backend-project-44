export const getRandomInt = (inclusiveMin, inclusiveMax) => (
  Math.floor(Math.random() * (inclusiveMax - inclusiveMin + 1)) + inclusiveMin
)
