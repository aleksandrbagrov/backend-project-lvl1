// 'readline-sync' tries to let your script have a conversation with the user via a console
import readlineSync from 'readline-sync';

// questionsNumber - the number of questions asked to the player to successfully
// complete the game (can be changed)
const questionsNumber = 3;

const index = (taskOfGame, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(taskOfGame);

  for (let i = 1; i <= questionsNumber; i += 1) {
    const pairQuestionAnswer = question();
    const questionOfGame = pairQuestionAnswer[0];
    const vinAnswer = pairQuestionAnswer[1];
    console.log(questionOfGame);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (vinAnswer !== playerAnswer) {
      console.log(`\x1b[0;31m'${playerAnswer}' \x1b[0mis wrong answer ;(\x1b[0;32m. \x1b[0m\
Correct answer was \x1b[0;31m'${vinAnswer}'\x1b[0;32m.\x1b[0m`);
      console.log(`Let\x1b[0;31m's try again, ${name}!\x1b[0m`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default index;
