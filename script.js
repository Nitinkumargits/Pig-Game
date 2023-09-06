'use strict';

// Selecting Queries

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition.
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

let currentScore = 0;

// Roll the dice

btnRoll.addEventListener('click', function () {
  // 1. Generate the random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display the image
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;
  // 3. Check for the roll 1
  if (dice !== 1) {
    // add the dice to the current score

    current0EL.textContent = currentScore += dice;
  } else {
    // Switch to the second player
  }
});
