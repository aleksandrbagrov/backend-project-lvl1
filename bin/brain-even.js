#!/usr/bin/env node

// Parity check. The essence of the game is as follows: the user is shown a random number
// And he needs to answer yes if the number is even, or no if it is odd.

// welcomeUser tries to let your script have a conversation with the user via a console
import welcomeUser from '../src/cli.js';

// answer - receives the player's answer to the question
import answer from '../src/cli-even.js';

// getRandomInt - generates random integers in the range [0, maxInt)
import getRandomInt from '../src/getRandomInt.js';

console.log('Welcome to the Brain Games!');
const name = welcomeUser();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// maxInt - is the maximum random integer that the game asks about (can be changed)
const maxInt = 100;
// questionsNumber - the number of questions asked to the player to successfully complete
// the game (can be changed)
const questionsNumber = 3;
let i = 0;
do {
  const numInt = getRandomInt(maxInt);
  const correctAnswer = numInt % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${numInt}`);
  const playerAnswer = answer();
  if (correctAnswer !== playerAnswer) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  } else {
    i += 1;
    console.log('Correct!');
  }
} while (i < questionsNumber);
if (i === questionsNumber) {
  console.log(`Congratulations, ${name}!`);
}
