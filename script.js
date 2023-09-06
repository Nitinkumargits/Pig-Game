'use strict';

// Selecting Queries
const player0EL = document.querySelector('.player--0 ');
const player1EL = document.querySelector('.player--1 ');

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

const score = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// Roll the dice

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate the random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display the image
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    // 3. Check for the roll 1
    if (dice !== 1) {
      // add the dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to the second player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.Add current score to active player score
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // 2.Check the player is >=100

    if (score[activePlayer] >= 20) {
      // finsh the Game
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3.Switch player
      switchPlayer();
    }
  }
});
