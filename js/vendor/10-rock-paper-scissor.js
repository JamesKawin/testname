const score = JSON.parse(localStorage.getItem('score'));

updateScoreElement();

function playGames(playerMove) {
  const computerMove = pickComputerMove()
  let result;

  if (playerMove === 'rock' ) {
    if (computerMove === 'rock') {
      result = 'tie'
    } else if (computerMove === 'paper') {
      result = 'you lose'
    } else if (computerMove === 'scissors') {
      result = 'you win'
    }
  }

  if (playerMove === 'paper' ) {
    if (computerMove === 'rock') {
      result = 'you win'
    } else if (computerMove === 'paper') {
        result = 'tie'
    } else if (computerMove === 'scissors') {
        result = 'you lose'
    }
  }

  if (playerMove === 'scissors' ) {
    if (computerMove === 'rock') {
      result = 'you lose'
    } else if (computerMove === 'paper') {
      result = 'you win'
    } else if (computerMove === 'scissors') {
      result = 'tie'
    }
  }

  if (result === 'you win') {
    score.wins += 1
  } else if (result === 'you lose') {
    score.losses += 1;
  } else if (result === 'tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result
  document.querySelector('.js-moves').innerHTML = `you
        <img src="../img/${playerMove}-emoji.png" class="move-icon" >
        <img src="../img/${computerMove}-emoji.png" class="move-icon"> computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `wins:${score.wins} losses:${score.losses}ties:${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function onResetScore(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
}

