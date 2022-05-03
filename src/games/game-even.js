import getRandomInt from '../getRandomInt.js';

import driveGame from '../index.js';

const maxInt = 100;

const isEven = (number) => number % 2 === 0;

const generateQuestionAnswer = () => {
  const numInt = getRandomInt(0, maxInt);
  const gameQuestion = String(numInt);
  const correctAnswer = isEven(numInt) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const runGame = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  driveGame(gameTask, generateQuestionAnswer);
};

export default runGame;
