import getRandomInt from '../getRandomInt.js';

import driveGame from '../index.js';

const mathOperationsSet = ['+', '-', '*'];

const maxInt = 20;

const genAnswer = (num1, num2, mathOperation) => {
  switch (mathOperation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${mathOperation} is not supported`);
  }
};

const generateQuestionAnswer = () => {
  const numInt1 = getRandomInt(0, maxInt);
  const numInt2 = getRandomInt(0, maxInt);
  const operationIndex = getRandomInt(0, mathOperationsSet.length - 1);
  const mathOperation = mathOperationsSet[operationIndex];
  const gameQuestion = `${numInt1} ${mathOperation} ${numInt2}`;
  const correctAnswer = String(genAnswer(numInt1, numInt2, mathOperation));
  return [gameQuestion, correctAnswer];
};

const runGame = () => {
  const gameTask = 'What is the result of the expression?';
  driveGame(gameTask, generateQuestionAnswer);
};

export default runGame;
