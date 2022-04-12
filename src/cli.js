// 'readline-sync' tries to let your script have a conversation with the user via a console
import readlineSync from 'readline-sync';

const welcomeUser = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default welcomeUser;
