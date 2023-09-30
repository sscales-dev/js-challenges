let userInput = 'bomb'

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if ((userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') === true) {
    console.log('User chooses... ' + userInput)
    return userInput;
  } else {
    return console.log("Sorry, this is not a valid input.")
  }
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        console.log('Computer chooses... rock')
        return 'rock';
      case 1:
        console.log('Computer chooses... paper')
        return 'paper';
      case 2:
        console.log('Computer chooses... scissors')
        return 'scissors';
    }
  }

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'User is the winner!'    
    } else if (userChoice === computerChoice) {
        return 'It\'s a tie!!'
    } else if (userChoice === 'rock') {
        //
        if (computerChoice === 'paper') {
            return 'And the winner is... Computer!'
        } else if (computerChoice === 'scissors') {
            return 'And the winner is... User!'
        }
    } else if (userChoice === 'paper') {
        //
        if (computerChoice === 'scissors' ) {
            return 'And the winner is... Computer!' //computer choice === scissors
        } else if (computerChoice === 'rock') {
            return 'And the winner is... User!' //computerChoice === 'rock'
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'And the winner is... Computer!'
        } else if  (computerChoice === 'paper') {
            return 'And the winner is... User!'
        }
    }
}

function playGame() {
  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice();
  let results = determineWinner(userChoice, computerChoice)
  return console.log(results)
}

playGame()