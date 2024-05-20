let choices = ['rock', 'paper', 'scissors'];
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let resultDisplay = document.getElementById('result');
let playerScore = document.getElementById('playerScore')
let computerScore = document.getElementById('computerScore')
let scoreP = 0
let scoreC = 0

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

    resultDisplay.classList.remove('success', 'fail')

    switch(result) {
        case "You Win!":
            resultDisplay.classList.add('success')
            scoreP++
            playerScore.textContent = scoreP
            break
        case "You Lose":
            resultDisplay.classList.add('fail')
            scoreC++
            computerScore.textContent = scoreC
            break
    }
}
