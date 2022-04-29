import getRandomInt from '../getRandomInt.js';

import index from '../index.js';

const gameTask = 'What number is missing in the progression?';

const firstElemProgr = 50;

const stepOfProgression = 15;

const lengthOfProgression = 13;

const generateProgression = (firstElem, step, progrLength) => {
  const progrArr = [firstElem];
  for (let k = 1; k < progrLength; k += 1) {
    progrArr.push(firstElem + k * step);
  }
  return progrArr;
};

const generateQuestionAnswer = () => {
  const firstElem = getRandomInt(0, firstElemProgr);
  const step = getRandomInt(1, stepOfProgression);
  const progrLength = getRandomInt(5, lengthOfProgression);
  const posOfElem = getRandomInt(0, progrLength - 1);
  const progression = generateProgression(firstElem, step, progrLength);
  const correctAnswer = progression[posOfElem].toString();
  progression[posOfElem] = '..';
  const gameQuestion = `${progression.join(' ')}`;
  return [gameQuestion, correctAnswer];
};

const runGame = () => {
  index(gameTask, generateQuestionAnswer);
};

export default runGame;
