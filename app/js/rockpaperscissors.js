////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === true) {
    } 
    else {
        move = getInput(); 
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === true) {
    } 
    else {
        move = randomPlay(); 
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if ((playerMove === 'rock' && computerMove === 'paper') 
        || (playerMove === 'paper' && computerMove === 'scissors') 
        || (playerMove === 'scissors' && computerMove === 'rock')) {
            winner = 'computer';
    } 
    else if ((playerMove === 'rock' && computerMove === 'scissors')
            || (playerMove === 'paper' && computerMove === 'rock')
            || (playerMove === 'scissors' && computerMove === 'paper')) {
                winner = 'player';
    } 
    else if (playerMove === computerMove) {
        winner = 'tie';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock Paper Scissors");           
    var playerWins = 0;
    var computerWins = 0;
    // This function should continue to play Rock Paper Scissors until either the
    // player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    if (winner === 'player') {
        playerWins + 1;
    }
    else if (winner === 'computer') {
        computerWins + 1;
    }
    else (winner ==='tie') {
        console.log("It's a tie!");
    } 
    while (playerWins < 5 && computerWins < 5) {
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        
    }
    if (playerWins === 5) {
        console.log("Player wins the game! :)");
    }
    else if (computerWins === 5) {
        console.log("Computer win the game! :(");
    }
    return [playerWins, computerWins];
}
