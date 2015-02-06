/*
 * RPSLS by Ross Ward 2015
 * micward2[at]gmail[dot]com
*/

// Players and Weapons
var human    = prompt("Choose rock, paper, scissors, lizard or spock:");
var computer = Math.random();
var weapons  = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Downcase input on var human
human = human.toLowerCase();

// Assign weapon to computer based on random value
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

// Function to check that weapon choice is valid
// Function to check losing combinations
function inArray(needle, haystack) {
    var i = 0;
    while (i < haystack.length) {
        haystack[i] === needle ? true : false;
        i++;
    }
} 

inArray(human, weapons);

// Announce weapons chosen with a summary
alert("Human: " + human + "\n" + "Computer: " + computer);

// Declare score variables, set to 0
var humanScore = 0;
var compScore  = 0;

// Combinations where particular weapons lose
var rock_loses     = ['spock', 'paper'];  // if rock draws spock OR paper he loses
var paper_loses    = ['lizard', 'scissors'];
var scissors_loses = ['rock', 'spock'];
var lizard_loses   = ['rock', 'scissors'];
var spock_loses    = ['lizard', 'paper'];

// Main logic to determine Winner
function calcWinner() {
    human === computer ? compScore += 0 : humanScore += 0;

    if (human === 'rock') {
        inArray(computer, rock_loses) ? compScore += 1 : humanScore +=1;
    }

    if (human === 'paper') {
        inArray(computer, paper_loses) ? compScore += 1 : humanScore += 1;
    }

    if (human === 'scissors') {
        inArray(computer, scissors_loses) ? compScore += 1 : humanScore += 1;
    }

    if (human === 'lizard') {
        inArray(computer, lizard_loses) ? compScore += 1 : humanScore += 1;
    }

    if (human === 'spock') {
        inArray(computer, spock_loses) ? compScore += 1 : humanScore += 1;
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
