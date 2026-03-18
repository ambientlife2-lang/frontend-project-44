import runGame from '../index.js';

const description = 'What is the result of the expression?';
const generateRoundData = () => {
  const operators = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const index = Math.floor(Math.random() * operators.length);
  const operator = operators[index];
  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
  const finalAnswer = String(correctAnswer);
  return [question, finalAnswer];
};
const runCalcGame = () => runGame(description, generateRoundData);

export default runCalcGame;
