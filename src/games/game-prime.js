import getRandomInt from '../getRandomInt.js';

import driveGame from '../index.js';

const maxInt = 100;

function isPrimeNumber(num) {
  const maxIterationValue = Math.sqrt(num);
  for (let i = 2; i <= maxIterationValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const generateQuestionAnswer = () => {
  const numInt = getRandomInt(2, maxInt);
  const gameQuestion = `${numInt}`;
  const correctAnswer = isPrimeNumber(numInt) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const runGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  driveGame(gameTask, generateQuestionAnswer);
};

export default runGame;
