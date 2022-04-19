// getRandomInt - generates random integers in the range [minInt, maxInt)
import getRandomInt from '../src/getRandomInt.js';

// welcome -  asks for the player's name and greets him
import welcome from '../src/welcome.js';

// index - the common core of all games - asks a question, compares the answer
// with the correct one, reacts to the answer
import index from '../src/index.js';

const name = welcome();

// each game has its own task
const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(gameTask);

// maxInt - is the maximum random integer that the game asks about (can be changed)
const maxInt = 100;

// questionsNumber - the number of questions asked to the player to successfully
// complete the game (can be changed)
const questionsNumber = 3;

// game stop condition on wrong answer
let flag = true;

let i = 1;
do {
  const numInt = getRandomInt(maxInt, 0);
  const gameQuestion = `Question: ${numInt}`;
  const correctAnswer = numInt % 2 === 0 ? 'yes' : 'no';
  flag = index(gameQuestion, correctAnswer, name, i, questionsNumber);
  i += 1;
} while (i <= questionsNumber && flag);
