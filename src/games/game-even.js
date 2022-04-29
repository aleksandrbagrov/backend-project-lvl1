import getRandomInt from '../getRandomInt.js';

import index from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxInt = 100;

const isEven = (number) => number % 2 === 0;

const generateQuestionAnswer = () => {
  const numInt = getRandomInt(0, maxInt);
  const gameQuestion = `${numInt}`;
  const correctAnswer = isEven(numInt) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const runGame = () => {
  index(gameTask, generateQuestionAnswer);
};

export default runGame;
