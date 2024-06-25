
function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
    switch (random){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }    
}

function getHumanChoice (){
    const choice = prompt('Enter your choice:');
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')){
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame (){
    for(let i = 0; i <5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound (humanChoice, computerChoice);
    }
}

playGame();

if(computerScore > humanScore){
    console.log('Computer won the game!');
}
else if (computerScore < humanScore){
    console.log('You won the game!');
}
else{
    console.log("It's a tie!");
}