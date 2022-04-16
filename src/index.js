// answer - receives the player's answer to the question
import answer from './answer.js';

const index = (questionOfGame, vinAnswer, name, j, numberOfAttempts) => {
  console.log(questionOfGame);
  const playerAnswer = answer('Your answer:');
  if (vinAnswer !== playerAnswer) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${vinAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  if (j === numberOfAttempts) {
    console.log(`Congratulations, ${name}!`);
    return false;
  }
  return true;
};

export default index;
