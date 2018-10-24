<html>
    <head>

    </head>
    <body>
        <h1>Use the console to play 5 rounds of the game 'rock, paper, scissors' against the computer and see who wins in the end!</h1>    
    </body>
    <script>

function computerPlay () {
  var plays = ["Rock", "Paper", "Scissors"];
  var play = plays[Math.floor(Math.random()*plays.length)];
  return play
};

  function makeCaseInsensitive(playerSelection){
            // console.log('original playerSelectoon: ' + playerSelection)
            playerSelection = playerSelection.toLowerCase()
            playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1, playerSelection.length)
            // console.log('processed playerSelection: ' + playerSelection)
            return playerSelection
  }      

function playRound(playerSelection,computerSelection){
  let playerscore = 0;
  let computerscore = 0;
  if (playerSelection == computerSelection){
  console.log(("You Tie!"));
  }

else if (playerSelection == "Rock" && computerSelection == "Paper"){
console.log("You loose! Paper beats Rock!")
computerscore = 1;
} else if (playerSelection == "Paper" && computerSelection == "Rock"){
console.log("You loose! Paper beats Rock!")
playerscore = 1;
} else if (playerSelection == "Scissors" && computerSelection == "Rock"){
console.log("You loose! Scissors beats Rock")
computerscore = 1;
} else if (playerSelection == "Rock" && computerSelection == "Scissors"){
console.log("You loose! Scissors beats Paper!")
playerscore = 1;
} else if (playerSelection == "Paper" && computerSelection == "Scissors"){
console.log("You loose! Rock beats Scissors!")
computerscore = 1;
} else if (playerSelection == "Scissors" && computerSelection == "Paper"){
console.log("You loose! Rock beats Scissors")
playerscore = 1;
}
return [playerscore, computerscore]

function game(){
let computerScore = 0;
let playerScore = 0;
for (i = 0; i < 5; i++){
  let playerSelection = prompt("Take your pick: Rock, Paper or Scissors?")
  let computerSelection = computerplay()
  console.log("round " (i + 1))
  console.log("Player Secton: " + playerSelection)
  console.log("Computer Selection: " + computerSelection)
  let scores = playRound (playerSelection,computerSelection)
  computerScore = computerScore + scores[0]
  playerScore = playerScore + scores[1]
  console.log("Player Secton: " + playerScore)
  console.log("Computer Selection: " + computerScore)
}

console.log("Computer score after 5 rounds: " + computerScore);
console.log("Player score after 5 rounds: " + playerScore);
if(computerScore == playerScore){
  console.log("You tied over 5 rounds, amazing")
} else if (computerScore > playerScore){
  console.log("You lose over 5 rounds!")
} else {
  console.log ("You win over 5 rounds")
}

}

};

       game()
    </script>
</html>