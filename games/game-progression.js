// getRandomInt - generates random integers in the range [0, maxInt)
import getRandomInt from '../src/getRandomInt.js';

// welcome -  asks for the player's name and greets him
import welcome from '../src/welcome.js';

// index - the common core of all games - asks a question, compares the answer
// with the correct one, reacts to the answer
import index from '../src/index.js';

const name = welcome();

// each game has its own task
const gameTask = 'What number is missing in the progression?';
console.log(gameTask);

// maxInt - is the maximum random integer that the game asks to do
// mathematical operations (can be changed)
// in terms of this game [0, 50) is the range of the first element of progression
const maxInt = 50;

// stepOfProgression - [1, 15) is the range of the step of
// our arithmetic progression (can be changed)
const stepOfProgression = 15;

// lengthOfProgression - [5, 13) is the range of the length of
// our progression wich must be displayed (can be changed)
const lengthOfProgression = 13;

// questionsNumber - the number of questions asked to the player to successfully
// complete the game (can be changed)
const questionsNumber = 3;

// game stop condition on wrong answer
let flag = true;

let i = 1;
do {
  const firstElem = getRandomInt(maxInt, 0);
  let progrInt = firstElem;
  let progrStr = '';
  let correctAnswer = progrInt.toString();
  const step = getRandomInt(stepOfProgression, 1);
  const progrLength = getRandomInt(lengthOfProgression, 5);
  const posOfElem = getRandomInt(progrLength, 0);
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
  flag = index(gameQuestion, correctAnswer, name, i, questionsNumber);
  i += 1;
} while (i <= questionsNumber && flag);
