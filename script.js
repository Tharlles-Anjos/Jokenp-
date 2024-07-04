let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = 'Empatou!';
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = 'Você ganhou!';
        playerScore++;
    } else {
        result = 'Você perdeu!';
        computerScore++;
    }

    updateScore();
    document.getElementById('result').innerText = `Você escolheu ${playerChoice}, o computador escolheu ${computerChoice}. ${result}`;
}

function updateScore() {
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
}
