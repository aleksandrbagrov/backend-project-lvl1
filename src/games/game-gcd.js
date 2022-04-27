// getRandomInt - generates random integers in the range [minInt, maxInt]
import getRandomInt from '../getRandomInt.js';

// index - the common core of all games - asks a question, compares the answer
// with the correct one, reacts to the answer
import index from '../index.js';

// gcd - (greatest common divisor) - determines the GCD of two integers
const gcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  const residue = num1 % num2;
  if (residue === 0) {
    return num2;
  }
  return gcd(num2, residue);
};

// each game has its own task
const gameTask = 'Find the greatest common divisor of given numbers.';

// maxInt - is the maximum random integer that the game asks to do
// mathematical operations (can be changed)
const maxInt = 200;

const pairQuestionAnswer = () => {
  const numInt1 = getRandomInt(0, maxInt);
  const numInt2 = getRandomInt(1, maxInt);
  const gameQuestion = `Question: ${numInt1} ${numInt2}`;
  const correctAnswer = gcd(numInt1, numInt2).toString();
  const pair = [gameQuestion, correctAnswer];
  return pair;
};

index(gameTask, pairQuestionAnswer);
