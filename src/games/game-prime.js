import getRandomInt from '../getRandomInt.js';

import driveGame from '../index.js';

function isPrimeNumber(num) {
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

const generateQuestionAnswer = () => {
  const maxInt = 100;
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
