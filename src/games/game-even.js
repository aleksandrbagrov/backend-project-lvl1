// getRandomInt - generates random integers in the range [minInt, maxInt]
import getRandomInt from '../getRandomInt.js';

// index - the common core of all games - asks a question, compares the answer
// with the correct one, reacts to the answer
import index from '../index.js';

// each game has its own task
const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// maxInt - is the maximum random integer that the game asks about (can be changed)
const maxInt = 100;

const pairQuestionAnswer = () => {
  const numInt = getRandomInt(0, maxInt);
  const gameQuestion = `Question: ${numInt}`;
  const correctAnswer = numInt % 2 === 0 ? 'yes' : 'no';
  const pair = [gameQuestion, correctAnswer];
  return pair;
};

index(gameTask, pairQuestionAnswer);
