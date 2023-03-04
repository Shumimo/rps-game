const game =  () => {
    let pScore = 0;
    let cScore = 0;

    // Start game on button click
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const challengerHand = document.querySelector('.challenger-hand');

        // computer options

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                // Call compareHands
                compareHands (this.textContent, computerChoice);
                
                // Update image
                playerHand.src = `./assets/${this.textContent}.png`;
                challengerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.challenger-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner')
        // Checking for a tie
        if(playerChoice == computerChoice){
            winner.textContent = `It's a tie!`;
            return;
        };
        // Check for rock
        if(playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Challenger wins!';
                cScore++;
                updateScore();
                return;
             };
        };
        // Check for paper
        if(playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Challenger wins!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
             };
        };
        // Check for scissors
        if(playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Challenger wins!';
                //cScore++;
                //updateScore();
                return;
             };
        };
    };
    // Inner functions
    startGame();
    playMatch();
};

// Start game
game();