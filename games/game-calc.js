// getRandomInt - generates random integers in the range [minInt, maxInt)
import getRandomInt from '../src/getRandomInt.js';

// welcome -  asks for the player's name and greets him
import welcome from '../src/welcome.js';

// index - the common core of all games - asks a question, compares the answer
// with the correct one, reacts to the answer
import index from '../src/index.js';

const name = welcome();

// each game has its own task
const gameTask = 'What is the result of the expression?';
console.log(gameTask);

// maxInt - is the maximum random integer that the game asks to do
// mathematical operations (can be changed)
const maxInt = 20;
const mathOperations = ['+', '-', '*'];

// questionsNumber - the number of questions asked to the player to successfully
// complete the game (can be changed)
const questionsNumber = 3;

// game stop condition on wrong answer
let flag = true;

let i = 1;
do {
  const numInt1 = getRandomInt(maxInt, 0);
  const numInt2 = getRandomInt(maxInt, 0);
  const operationFlag = getRandomInt(mathOperations.length, 0);
  const gameQuestion = `Question: ${numInt1} ${mathOperations[operationFlag]} ${numInt2}`;
  let res = 0;
  // eslint-disable-next-line default-case
  switch (operationFlag) {
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
  flag = index(gameQuestion, correctAnswer, name, i, questionsNumber);
  i += 1;
} while (i <= questionsNumber && flag);
