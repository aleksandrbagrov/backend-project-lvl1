// answer -  tries to let your script have a conversation with the user via a console
import answer from './answer.js';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = answer('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

export default welcome;
