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
if (human === computer) {
    alert("Tie");
}

if (human === 'rock') {
    if (inArray(computer, rock_loses)) {
        alert("Computer wins");
        compScore += 1;
    } else {
        alert("User wins");
        humanScore += 1;
    }
}

if (human === 'paper') {
    if (inArray(computer, paper_loses)) {
        alert("Computer wins");
        compScore += 1;
    } else {
        alert("User wins");
        humanScore += 1;
    }
}

if (human === 'scissors') {
    if (inArray(computer, scissors_loses)) {
        alert("Computer wins");
        compScore += 1;
    } else {
        alert("User wins");
        humanScore += 1;
    }
}

if (human === 'lizard') {
    if (inArray(computer, lizard_loses)) {
        alert("Computer wins");
        compScore += 1;
    } else {
        alert("User wins");
        humanScore += 1;
    }
}

if (human === 'spock') {
    if (inArray(computer, spock_loses)) {
        alert("Computer wins");
        compScore += 1;
    } else {
        alert("User wins");
        humanScore += 1;
    }
}

// Logic to announce the Winner
if (humanScore > compScore) {
    alert("User wins game!");
} else if (humanScore === compScore) {
    alert("Game is tied!");
} else {
    alert("Computer wins game!");
}

