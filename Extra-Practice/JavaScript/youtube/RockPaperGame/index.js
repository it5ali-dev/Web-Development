let choices = ['rock', 'paper', 'scissors'];
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let resultDisplay = document.getElementById('result');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's A Tie!";
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? 'You Win!' : 'You Lose';
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'You Win!' : 'You Lose';
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? 'You Win!' : 'You Lose';
                break;
        }
    }

    player.textContent = `Player: ${playerChoice}`;
    computer.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
}
