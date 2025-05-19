import readlineSync from "readline-sync";

export const getName = () => {
  const name = readlineSync.question("Your answer: ");
};
