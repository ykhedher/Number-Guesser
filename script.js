let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (user, computer, secret) => {
   if(user === computer || Math.abs(secret - computer) > Math.abs(secret - user)){
      return true
   }
   else if(Math.abs(secret - computer) > Math.abs(secret - user)){
      return true
   }
   else return false;
}
const updateScore = winner => {
   if(winner.toLowerCase() === 'human'){
      humanScore++;
   }
   else if(winner.toLowerCase() === 'computer'){
      computerScore++;
   }
}

const advanceRound = round => round++;