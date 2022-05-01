import getRandomInt from '../getRandomInt.js';

import driveGame from '../index.js';

const generateProgression = (firstElement, step, length) => {
  const progressionArray = [];
  for (let k = 0; k < length; k += 1) {
    progressionArray.push(firstElement + k * step);
  }
  return progressionArray;
};

const generateQuestionAnswer = () => {
  const firstElementProgression = 50;
  const stepOfProgression = 15;
  const lengthOfProgression = 13;
  const firstElement = getRandomInt(0, firstElementProgression);
  const step = getRandomInt(1, stepOfProgression);
  const progrressionLength = getRandomInt(5, lengthOfProgression);
  const indexOfElement = getRandomInt(0, progrressionLength - 1);
  const progression = generateProgression(firstElement, step, progrressionLength);
  const correctAnswer = String(progression[indexOfElement]);
  progression[indexOfElement] = '..';
  const gameQuestion = `${progression.join(' ')}`;
  return [gameQuestion, correctAnswer];
};

const runGame = () => {
  const gameTask = 'What number is missing in the progression?';
  driveGame(gameTask, generateQuestionAnswer);
};

export default runGame;
