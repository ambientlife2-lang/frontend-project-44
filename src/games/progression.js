/* eslint-disable no-plusplus */
import runGame from '../index.js';

const description = 'What number is missing in the progression?';
const generateRoundData = () => {
  const arr = [];

  const start = Math.floor(Math.random() * 20);
  const step = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 6) + 5;

  for (let i = 0; i < length; i++) {
    const currentElement = start + i * step;
    arr.push(currentElement);
  }
  const randomIndex = Math.floor(Math.random() * length);

  const answer = arr[randomIndex];
  arr[randomIndex] = '..';
  const question = arr.join(' ');

  return [question, String(answer)];
};

const startProgressionGame = () => {
  runGame(description, generateRoundData);
};
export default startProgressionGame;
