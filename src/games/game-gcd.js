import getRandomInt from '../getRandomInt.js';

import driveGame from '../index.js';

const maxInt = 200;

const gcd = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return gcd(num2, num1 % num2);
};

const generateQuestionAnswer = () => {
  const numInt1 = getRandomInt(0, maxInt);
  const numInt2 = getRandomInt(1, maxInt);
  const gameQuestion = `${numInt1} ${numInt2}`;
  const correctAnswer = gcd(numInt1, numInt2).toString();
  return [gameQuestion, correctAnswer];
};

const runGame = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  driveGame(gameTask, generateQuestionAnswer);
};

export default runGame;
