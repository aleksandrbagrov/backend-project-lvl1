import getRandomInt from '../getRandomInt.js';

import index from '../index.js';

const gameTask = 'What is the result of the expression?';

const maxInt = 20;

const setMathOperations = ['+', '-', '*'];

const genAnswer = (numInt1, numInt2, operationIndex) => {
  let res = 0;
  // eslint-disable-next-line default-case
  switch (operationIndex) {
    case 0:
      res = numInt1 + numInt2;
      break;
    case 1:
      res = numInt1 - numInt2;
      break;
    case 2:
      res = numInt1 * numInt2;
      break;
  }
  return res.toString();
};

const generateQuestionAnswer = () => {
  const numInt1 = getRandomInt(0, maxInt);
  const numInt2 = getRandomInt(0, maxInt);
  const operationIndex = getRandomInt(0, setMathOperations.length - 1);
  const gameQuestion = `${numInt1} ${setMathOperations[operationIndex]} ${numInt2}`;
  const correctAnswer = genAnswer(numInt1, numInt2, operationIndex);
  return [gameQuestion, correctAnswer];
};

const runGame = () => {
  index(gameTask, generateQuestionAnswer);
};

export default runGame;
