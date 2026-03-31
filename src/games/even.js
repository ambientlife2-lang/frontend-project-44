#!/usr/bin/env node

import { question } from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const userAnswer = question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit(0);
  }
}

console.log(`Congratulations, ${name}!`);
