let rock = {
  name: 'rock',
  num: 0,
  emoji: '👊',
};

let paper = {
  name: 'paper',
  num: 1,
  emoji: '👋',
};
let scissor = {
  name: 'scissor',
  num: 2,
  emoji: '✌',
};

let minNum = 0;
let maxNum = 3;
let clicked = false;
let numberOfRound = 5;

let btnDefaultValue;
let randomComputerValue; // capture random choice from computer
let defaultPlayerChoice; // capture default choice from user
let computerWinCount = 0;
let computerLoseCount = 0;
let playerWinCount = 0;
let playerLoseCount = 0;

let computerChoice = document.getElementById('computer-choice');
let playerClicks = document.getElementsByClassName('playerClick');
let playerChoice = document.getElementById('player-choice');

let playerWin = document.getElementById('player-win'); // player win paragraph
let playerLose = document.getElementById('player-lose'); // player lose paragraph
let computerWin = document.getElementById('computer-win'); //computer win paragraph
let computerLose = document.getElementById('computer-lose'); // computer loses paragraph

let winner = document.getElementById('winner');
let timer = 2000;

/**
 *this function generate random to pick between choices for rock, paper, scissor
 * @returns random Number from 0 to 2
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

/**
 * winning, set count for wins and lost
 * @param {*} computerPick computer choice between rock, paper, scissor
 * @param {*} userPick player choice rock, paper, scissor
 *  */
function winning(computerPick, userPick) {
  console.log(computerPick);
  console.log(userPick);

  if (computerPick === 'paper' && userPick === 'rock') {
    computerWin.textContent = ` ${(computerWinCount = computerWinCount + 1)}`;
    playerLose.textContent = ` ${(playerLoseCount = playerLoseCount + 1)}`;
    // alert('computer win:');
  } else if (computerPick === 'rock' && userPick === 'scissor') {
    computerWin.textContent = ` ${(computerWinCount = computerWinCount + 1)}`;
    playerLose.textContent = ` ${(playerLoseCount = playerLoseCount + 1)}`;
    // alert('user win');
  } else if (computerPick === 'scissor' && userPick === 'paper') {
    computerWin.textContent = ` ${(computerWinCount = computerWinCount + 1)}`;
    playerLose.textContent = ` ${(playerLoseCount = playerLoseCount + 1)}`;
  } else if (userPick === 'paper' && computerPick == 'rock') {
    playerWin.textContent = ` ${(playerWinCount = playerWinCount + 1)}`;
    computerLose.textContent = ` ${(computerLoseCount =
      computerLoseCount + 1)}`;
    // alert('user win');
  } else if (userPick === 'rock' && computerPick == 'scissor') {
    playerWin.textContent = ` ${(playerWinCount = playerWinCount + 1)}`;
    computerLose.textContent = ` ${(computerLoseCount =
      computerLoseCount + 1)}`;

    // alert('user win');
  } else if (userPick === 'scissor' && computerPick == 'paper') {
    playerWin.textContent = ` ${(playerWinCount = playerWinCount + 1)}`;
    computerLose.textContent = ` ${(computerLoseCount =
      computerLoseCount + 1)}`;
    // alert('user win');
  }
  console.log(computerWinCount);
  console.log(playerLoseCount);
  console.log(playerWinCount);
  console.log(computerLoseCount);
}

/**
 * emoji generator
 */

function generateEmoji(choice) {
  if (choice === 'paper') {
    return paper.emoji;
  } else if (choice === 'scissor') {
    return scissor.emoji;
  } else {
    return rock.emoji;
  }
}

/**
 * clear field text */

function clearFields() {
  computerChoice.textContent = ``;
  playerChoice.textContent = ``;
  computerWin.textContent = ``;
  playerLose.textContent = ``;
  playerWin.textContent = ``;
  computerLose.textContent = ``;
  winner.textContent = ``;
}

/**
 * reset game when the win count for both player and computer is > 5
 */

function resetGame(computerCount, playerCount) {
  if (computerCount >= numberOfRound) {
    alert('computer win, play again');
    winner.textContent = 'Computer';
    setTimeout(() => {
      clearFields();
    }, timer);

    // clearFields();
  } else if (playerCount >= numberOfRound) {
    // alert('player win');
    winner.textContent = 'Player!!! 🎊 🎊 🎊';
    setTimeout(() => {
      clearFields();
    }, timer);
  }
}

/** generate tie */
function tieGenerator(computerPick, userPick) {
  if (computerPick === userPick) {
    alert('tie, play again');
  }
}
/**
 *
 * @param {*} choice take the random number as parameter
 * @returns either rock, paper or scissor string
 */
function generateChoice(choice) {
  if (choice === rock.num) {
    return rock.name;
  } else if (choice === paper.num) {
    return paper.name;
  } else {
    return scissor.name;
  }
}

/**
 *
 * @param {*} randomNum
 * @returns randomly return roc, paper or scissor for computer
 */
function rollComputerChoice(randomNum) {
  return generateChoice(randomNum);
}

/**
 *
 * @param {*} btnValue, take the default value of the button that the user clicked
 * and append it to the DOM when the user click on the btn
 */
function userSelection(btnValue) {
  btnDefaultValue = btnValue;
  let randomComputerNumber = generateRandomNumber();
  let computerEmoji;
  let playerEmoji;

  //computer
  randomComputerValue = rollComputerChoice(randomComputerNumber);
  computerChoice.textContent += ` ${(computerEmoji = generateEmoji(
    rollComputerChoice(randomComputerNumber)
  ))}`;

  //user
  defaultPlayerChoice = generateChoice(Number(btnDefaultValue));
  playerChoice.textContent += ` ${(playerEmoji = generateEmoji(
    generateChoice(Number(btnDefaultValue))
  ))}`;
  //   rollUserChoice(btnDefaultValue);

  console.log('computer:', typeof randomComputerValue); //computer choice
  console.log('player:', typeof defaultPlayerChoice); //computer player
  //   console.log(rollUserChoice(btnDefaultValue));

  winning(randomComputerValue, defaultPlayerChoice);
  resetGame(computerWinCount, playerWinCount);
  tieGenerator(randomComputerValue, defaultPlayerChoice);
}

// function rollUserChoice(userInput) {
//   //   console.log(typeof userInput);

//   playerChoice.textContent += ` ${generateChoice(Number(userInput))}`;
// }
