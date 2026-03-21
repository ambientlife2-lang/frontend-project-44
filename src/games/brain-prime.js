import runGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i * i <= num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateRoundData = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

const startPrimeGame = () => {
  runGame(description, generateRoundData);
};
export default startPrimeGame;
