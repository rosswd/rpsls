/*
 * RPSLS by Ross Ward 2015
 * micward2[at]gmail[dot]com
/*

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

// Announce weapons chosen summary
alert("Human: " + human + "\n" + "Computer: " + computer);

// Declare score variables
var human_score = 0;
var comp_score  = 0;

// Combinations where particular weapons lose
var rock_loses     = ['spock', 'paper'];  // if rock draws spock OR paper he loses
var paper_loses    = ['lizard', 'scissors'];
var scissors_loses = ['rock', 'spock'];
var lizard_loses   = ['rock', 'scissors'];
var spock_loses    = ['lizard', 'paper'];

// Determine Winner
if (human === computer) {
	alert("Tie");
}

if (human === 'rock') {
    if (inArray(computer, rock_loses)) {
        alert("Computer wins");
        comp_score += 1;
    } else {
        alert("User wins");
        human_score += 1;
    }
}

if (human === 'paper') {
    if (inArray(computer, paper_loses)) {
        alert("Computer wins");
        comp_score += 1;
    } else {
        alert("User wins");
        human_score += 1;
    }
}

if (human === 'scissors') {
    if (inArray(computer, scissors_loses)) {
        alert("Computer wins");
        comp_score += 1;
    } else {
        alert("User wins");
        human_score += 1;
    }
}

if (human === 'lizard') {
    if (inArray(computer, lizard_loses)) {
        alert("Computer wins");
        comp_score += 1;
    } else {
        alert("User wins");
        human_score += 1;
    }
}

if (human === 'spock') {
    if (inArray(computer, spock_loses)) {
        alert("Computer wins");
        comp_score += 1;
    } else {
        alert("User wins");
        human_score += 1;
    }
}

if (human_score > comp_score) {
    alert("User wins game!");
} else if (human_score === comp_score) {
    alert("Game is tied!");
} else {
    alert("Computer wins game!");
}

