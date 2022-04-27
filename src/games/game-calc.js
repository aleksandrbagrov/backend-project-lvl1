// getRandomInt - generates random integers in the range [minInt, maxInt]
import getRandomInt from '../getRandomInt.js';

// index - the common core of all games - asks a question, compares the answer
// with the correct one, reacts to the answer
import index from '../index.js';

// each game has its own task
const gameTask = 'What is the result of the expression?';

// maxInt - is the maximum random integer that the game asks to do
// mathematical operations (can be changed)
const maxInt = 20;
const mathOperations = ['+', '-', '*'];

const pairQuestionAnswer = () => {
  const numInt1 = getRandomInt(0, maxInt);
  const numInt2 = getRandomInt(0, maxInt);
  const operationIndex = getRandomInt(0, mathOperations.length - 1);
  const gameQuestion = `Question: ${numInt1} ${mathOperations[operationIndex]} ${numInt2}`;
  let res = 0;
  // eslint-disable-next-line default-case
  switch (operationIndex) {
    case 0:
      res = numInt1 + numInt2;
      break;
    case 1:
      res = numInt1 - numInt2;
      break;
    case 2:
      res = numInt1 * numInt2;
      break;
  }
  const correctAnswer = res.toString();

  const pair = [gameQuestion, correctAnswer];
  return pair;
};

index(gameTask, pairQuestionAnswer);
