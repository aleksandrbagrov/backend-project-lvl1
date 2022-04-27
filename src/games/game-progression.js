// getRandomInt - generates random integers in the range [0, maxInt)
import getRandomInt from '../getRandomInt.js';

// index - the common core of all games - asks a question, compares the answer
// with the correct one, reacts to the answer
import index from '../index.js';

// each game has its own task
const gameTask = 'What number is missing in the progression?';

// maxInt - is the maximum random integer that the game asks to do
// mathematical operations (can be changed)
// in terms of this game [0, 50] is the range of the first element of progression
const maxInt = 50;

// stepOfProgression - [1, 15] is the range of the step of
// our arithmetic progression (can be changed)
const stepOfProgression = 15;

// lengthOfProgression - [5, 13] is the range of the length of
// our progression wich must be displayed (can be changed)
const lengthOfProgression = 13;

const pairQuestionAnswer = () => {
  const firstElem = getRandomInt(0, maxInt);
  let progrInt = firstElem;
  let progrStr = '';
  let correctAnswer = progrInt.toString();
  const step = getRandomInt(1, stepOfProgression);
  const progrLength = getRandomInt(5, lengthOfProgression);
  const posOfElem = getRandomInt(0, progrLength - 1);
  for (let k = 0; k < progrLength; k += 1) {
    if (k === posOfElem) {
      progrStr += ' ..';
      correctAnswer = progrInt.toString();
    } else {
      progrStr += ` ${progrInt.toString()}`;
    }
    progrInt += step;
  }
  const gameQuestion = `Question: ${progrStr.trim()}`;
  const pair = [gameQuestion, correctAnswer];
  return pair;
};

index(gameTask, pairQuestionAnswer);
