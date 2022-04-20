// answer - receives the player's answer to the question
import answer from './answer.js';

const index = (questionOfGame, vinAnswer, name, j, numberOfAttempts) => {
  console.log(questionOfGame);
  const playerAnswer = answer('Your answer:');
  if (vinAnswer !== playerAnswer) {
    console.log(
      `\x1b[0;31m'${playerAnswer}' \x1b[0mis wrong answer ;(\x1b[0;32m. \x1b[0mCorrect answer was \x1b[0;31m'${vinAnswer}'\x1b[0;32m.\x1b[0m`
    );
    console.log(`Let\x1b[0;31m's try again, ${name}!\x1b[0m`);
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
