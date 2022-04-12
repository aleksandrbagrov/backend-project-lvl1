// 'readline-sync' tries to let your script have a conversation with the user via a console
import readlineSync from 'readline-sync';

const answer = () => {
  const answerYesNo = readlineSync.question('Your answer: ');
  return answerYesNo;
};

export default answer;
