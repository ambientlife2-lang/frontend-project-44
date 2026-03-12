import runGame from '../index.js';

const getGcd = (a, b) => {
  const min = Math.min(a, b);
  let i = min;
  while (i >= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }

    i -= 1;
  }
};

function createRandomNums() {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);

  return { num1, num2 };
}
const generateRoundData = () => {
  const { num1, num2 } = createRandomNums();

  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};
const startGcdGame = () => {
const description = 'Find the greatest common divisor of given numbers.';
runGame(description, generateRoundData);
}
export default startGcdGame;