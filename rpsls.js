/*
 * RPSLS by Ross Ward 2015
 * micward2[at]gmail[dot]com
*/

// Players and Weapons
var human    = prompt("Choose rock, paper, scissors, lizard or spock:");
var computer = Math.random();
var weapons  = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Declare score variables, set to 0
var humanScore = 0;
var compScore  = 0;

// A message that will be output with the winning weapon's mantra
// i.e. Paper covers Rock, Paper disproves Spock
var mantra = '';

// Regular expressions for sanitizing input
var reDigit  = /\d/;
var reChar   = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

// Function to sanitize input for human player
// player argument can be human or computer but right now
// it is probably human
function sanitizePlayerInput(player) {
    if (player === '' || reDigit.exec(player) || reChar.exec(player) || typeof(player) !== "string") {
        alert("Invalid input - Page will now reload!");
        window.location.reload();  // extreme, only temp
    } else {
        player = player.toLowerCase() && human;
    }
}

sanitizePlayerInput(human);

// Function to randomly assign weapon to computer
function randomComputerChoice() {
    if (computer < 0.19) {
        computer = 'rock';
    } else if (computer <= 0.38) {
        computer = 'paper';
    } else if (computer <= 0.57) {
        computer = 'scissors';
    } else if (computer <= 0.76) {
        computer = 'lizard';
    } else {
        computer = 'spock';
    }
}

randomComputerChoice();

// Announce weapons chosen with a summary
alert("Human: " + human + "\n" + "Computer: " + computer);

// Function to check if player has a winning combination in one
// of the arrays that beats other player
function findInArray(player, weaponsThatBeat) {
    if (weaponsThatBeat.indexOf(player) >= 0) {
        return true;
    } else {
        return false;
    }
}

/*
 * Listed below are cases where a particular weapon is defeated.
 *
*/
var rockLoses     = ['spock', 'paper'];  // if rock draws spock OR paper he loses
var paperLoses    = ['lizard', 'scissors'];
var scissorsLoses = ['rock', 'spock'];
var lizardLoses   = ['rock', 'scissors'];
var spockLoses    = ['lizard', 'paper'];

// Function to determine Winner
function calcWinner() {
    if ( human === 'rock' && findInArray(computer, rockLoses) ) {
        mantra = "Remember: Rock crushes Scissors, Rock crushes Lizard";
        compScore += 1;
    } else if ( human === 'paper' && findInArray(computer, paperLoses) ) {
      mantra = "Remember: Paper covers Rock, Paper disproves Spock";
        compScore += 1;
    } else if ( human === 'scissors' && findInArray(computer, scissorsLoses) ) {
        mantra = "Remember: Scissors decapitates Lizard, Scissors cuts Paper";
        compScore += 1;
    } else if ( human === 'lizard' && findInArray(computer, lizardLoses) ) {
      mantra = "Remember: Lizard eats Paper, Lizard poisons Spock";
        compScore += 1;
    } else if ( human === 'spock' && findInArray(computer, spockLoses) ) {
        mantra = "Remember: Spock vaporizes Rock, Spock smashses Scissors";
        compScore += 1;
    } else if (human === computer) {
        compScore  += 0;
        humanScore += 0;
    } else {
        humanScore += 1;
    }
}

calcWinner();

// Function to get final score
function finalScore() {
    if (humanScore > compScore) {
        alert("User wins game!");
    } else if (humanScore === compScore) {
        alert("Game is tied");
    } else {
        alert("Computer wins");
    }
}

finalScore();
