// 'readline-sync' tries to let your script have a conversation with the user via a console
import readlineSync from 'readline-sync';

const answer = (question) => {
  const answerYesNo = readlineSync.question(`${question}: `);
  return answerYesNo;
};

export default answer;
