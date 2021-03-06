import readlineSync from 'readline-sync';

const questionsNumber = 3;

const driveGame = (taskOfGame, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(taskOfGame);

  for (let i = 0; i < questionsNumber; i += 1) {
    const [gameQuestion, correctAnswer] = getQuestionAnswer();
    console.log(`Question: ${gameQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`\x1b[0;31m'${playerAnswer}' \x1b[0mis wrong answer ;(\x1b[0;32m. \x1b[0m\
Correct answer was \x1b[0;31m'${correctAnswer}'\x1b[0;32m.\x1b[0m`);
      console.log(`Let\x1b[0;31m's try again, ${name}!\x1b[0m`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default driveGame;
