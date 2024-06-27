function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function updateScoreUI() {
    document.getElementById('compScore').textContent = computerScore;
    document.getElementById('yScore').textContent = humanScore;
}

function updateResultUI(message) {
    document.getElementById('result').textContent = message;
}

function resetGame(){
    let humanScore = 0;
    let computerScore = 0;
    updateScoreUI()
    document.getElementById('result').textContent = 'Game is playing ...';
    document.getElementById("rockChoice").disabled = false;
    document.getElementById("paperChoice").disabled = false;
    document.getElementById("scissorsChoice").disabled = false;    
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result;

    if (humanChoice === computerChoice) {
        result = `It's a tie! You both chose ${humanChoice}`;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
    }

    updateScoreUI();
    updateResultUI(result);
    checkGameEnd();
}

function checkGameEnd() {
    if (humanScore == 5 || computerScore == 5) {
        const winnerMessage = humanScore > computerScore ? 'You won the game!' : 'Computer won the game!';
        updateResultUI(winnerMessage);
        humanScore = 0;
        computerScore = 0;
        document.getElementById("rockChoice").disabled = true;
        document.getElementById("paperChoice").disabled = true;
        document.getElementById("scissorsChoice").disabled = true;
    }
}

function playGame() {
    const rockChoice = document.getElementById("rockChoice");
    const paperChoice = document.getElementById("paperChoice");
    const scissorsChoice = document.getElementById("scissorsChoice");
    const reset = document.getElementById("reset");

    rockChoice.onclick = () => playRound('rock');
    paperChoice.onclick = () => playRound('paper');
    scissorsChoice.onclick = () => playRound('scissors');
    reset.onclick = () => resetGame();
}

let humanScore = 0;
let computerScore = 0;
playGame(); 
