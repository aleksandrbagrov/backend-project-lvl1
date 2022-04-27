// getRandomInt - generates random integers in the range [minInt, maxInt)
import getRandomInt from '../getRandomInt.js';

// index - the common core of all games - asks a question, compares the answer
// with the correct one, reacts to the answer
import index from '../index.js';

// isPrimeNumber - function predicatum wich check is number prime or not
// parameter num is a natural number > 2
function isPrimeNumber(num) {
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0 && i !== num) {
      return false;
    }
  }
  return true;
}

// each game has its own task
const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// maxInt - is the maximum random integer that the game asks about (can be changed)
const maxInt = 100;

const pairQuestionAnswer = () => {
  const numInt = getRandomInt(2, maxInt);
  const gameQuestion = `Question: ${numInt}`;
  const correctAnswer = isPrimeNumber(numInt) === true ? 'yes' : 'no';
  const pair = [gameQuestion, correctAnswer];
  return pair;
};

index(gameTask, pairQuestionAnswer);
