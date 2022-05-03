import getRandomInt from '../getRandomInt.js';

import driveGame from '../index.js';

const maxFirstElementProgression = 50;
const maxStepProgression = 15;
const maxLengthProgression = 13;

const generateProgression = (firstElement, step, length) => {
  const progressionArray = [];
  for (let k = 0; k < length; k += 1) {
    progressionArray.push(firstElement + k * step);
  }
  return progressionArray;
};

const generateQuestionAnswer = () => {
  const firstElement = getRandomInt(0, maxFirstElementProgression);
  const step = getRandomInt(1, maxStepProgression);
  const progrressionLength = getRandomInt(5, maxLengthProgression);
  const indexOfElement = getRandomInt(0, progrressionLength - 1);
  const progression = generateProgression(firstElement, step, progrressionLength);
  const correctAnswer = String(progression[indexOfElement]);
  progression[indexOfElement] = '..';
  const gameQuestion = progression.join(' ');
  return [gameQuestion, correctAnswer];
};

const runGame = () => {
  const gameTask = 'What number is missing in the progression?';
  driveGame(gameTask, generateQuestionAnswer);
};

export default runGame;
