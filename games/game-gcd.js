// getRandomInt - generates random integers in the range [0, maxInt)
import getRandomInt from '../src/getRandomInt.js';

// welcome -  asks for the player's name and greets him
import welcome from '../src/welcome.js';

// index - the common core of all games - asks a question, compares the answer
// with the correct one, reacts to the answer
import index from '../src/index.js';

// gcd (Greatest Common Divisor) - determines the GCD of two integers
import gcd from '../src/gcd.js';

const name = welcome();

// each game has its own task
const gameTask = 'Find the greatest common divisor of given numbers.';
console.log(gameTask);

// maxInt - is the maximum random integer that the game asks to do
// mathematical operations (can be changed)
const maxInt = 200;

// questionsNumber - the number of questions asked to the player to successfully
// complete the game (can be changed)
const questionsNumber = 3;

// game stop condition on wrong answer
let flag = true;

let i = 1;
do {
  const numInt1 = getRandomInt(maxInt);
  const numInt2 = getRandomInt(maxInt);
  const gameQuestion = `Question: ${numInt1} ${numInt2}`;
  const correctAnswer = gcd(numInt1, numInt2).toString();
  flag = index(gameQuestion, correctAnswer, name, i, questionsNumber);
  i += 1;
} while (i <= questionsNumber && flag);
