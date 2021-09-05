let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



const generateTarget = () => {
    return Math.floor(Math.random()* 10);
}

const compareGuesses = ( human, computer, target) => {

    const humanDifference = Math.abs( human - target);
    const computerDifference = Math.abs(computer - target);

    if (humanDifference < computerDifference){
        return true;
    } else if (humanDifference > computerDifference) {
        return false;
    } else {
        return true;
    }
}

const updateScore = winner => {
    if (winner === 'human'){
        humanScore++ ;
    } else ( winner === 'computer')
       return computerScore++ ;
    }


const advanceRound = () => currentRoundNumber++;

