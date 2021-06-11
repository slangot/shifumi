/////////// INFO : PAPER = 1 ; ROCK = 2; SCISSORS = 3

/****** Choice Container */
const choiceElement = document.querySelectorAll('.choice-element');
let userChoice = 0;
const userScore = document.querySelector('#user-score');
const opponentScore = document.querySelector('#opponent-score');

/****** Fight Container */
const fightContainer =  document.querySelector('.fight-container');
const fightResultInfo = document.querySelector('.fight-result-info');
//const fightResultInfo = document.querySelector('h3');
let userChoiceFight = document.querySelector('.user-choice-fight');
let opponentChoiceFight = document.querySelector('.opponent-choice-fight');

let opponentRandomChoice = 0;
let fightCurrentResult = "";
let userCurrentScore = 0;
let opponentCurrentScore = 0;

/****** Functions */

// Function to generate randomly the opponent choice
const opponentChoiceGenerator = () => {
    return Math.floor(Math.random () * 3) + 1;
}

// Function to change the image of the user choice
const userChoiceChange = (userChoice) => {
    switch(userChoice) {
        case 1:
            userChoiceFight.innerHTML = '<i class="fas fa-hand-paper"></i>';
            break;
        case 2:
            userChoiceFight.innerHTML = '<i class="fas fa-hand-rock"></i>';
            break;
        case 3:
            userChoiceFight.innerHTML = '<i class="fas fa-cut" style="transform: rotate(-90deg)"></i>';
            break;
        default:
            userChoiceFight.innerHTML = "ERREUR !";
    }
}

// Function to change the image of the opponent choice
const opponentChoiceChange = (opponentChoice) => {
    switch(opponentChoice) {
        case 1:
            opponentChoiceFight.innerHTML = '<i class="fas fa-hand-paper"></i>';
            break;
        case 2:
            opponentChoiceFight.innerHTML = '<i class="fas fa-hand-rock"></i>';
            break;
        case 3:
            opponentChoiceFight.innerHTML = '<i class="fas fa-cut" style="transform: rotate(-90deg)"></i>';
            break;
        default:
            opponentChoiceFight.innerHTML = "ERREUR !";
    }
}

// Function to calculate the winner
const fightResult = (userChoice, opponentChoice) => {
    console.log(`u : ${userChoice} VS o : ${opponentChoice}`);
    if(userChoice === 1 && opponentChoice === 1) {
        fightResultInfo.innerHTML = "That's a DRAW !";
        fightCurrentResult = "draw";
    } else if(userChoice === 1 && opponentChoice === 2) {
        fightResultInfo.innerHTML = "You win !";
        fightCurrentResult = "win";
    } else if(userChoice === 1 && opponentChoice === 3) {
        fightResultInfo.innerHTML = "You lose !";
        fightCurrentResult = "lose";
    } else if(userChoice === 2 && opponentChoice === 1) {
        fightResultInfo.innerHTML = "You lose !";
        fightCurrentResult = "lose";
    } else if(userChoice === 2 && opponentChoice === 2) {
        fightResultInfo.innerHTML = "That's a DRAW !";
        fightCurrentResult = "draw";
    } else if(userChoice === 2 && opponentChoice === 3) {
        fightResultInfo.innerHTML = "You win !";
        fightCurrentResult = "win";
    } else if(userChoice === 3 && opponentChoice === 1) {
        fightResultInfo.innerHTML = "You win !";
        fightCurrentResult = "win";
    } else if(userChoice === 3 && opponentChoice === 2) {
        fightResultInfo.innerHTML = "You lose !";
        fightCurrentResult = "lose";
    } else if(userChoice === 3 && opponentChoice === 3) {
        fightResultInfo.innerHTML = "That's a DRAW !";
        fightCurrentResult = "draw";
    }
}

// Function to manage scores
const scoreManage = (gameResult) => {
    switch(gameResult) {
        case "win":
            userCurrentScore += 1;
            userScore.innerHTML = userCurrentScore;
            break;
        case "lose":
            opponentCurrentScore += 1
            opponentScore.innerHTML = opponentCurrentScore;
            break;
        case "draw":
            break;
        default:
            console.error("CAN'T MANAGE THE SCORE");

    }
}


// Function to animate the game result
const gameResultAnimation = (result) => {
    switch(result) {
        case "win":
            userChoiceFight.style.animation = "user-win-fight-animation 2s";
            opponentChoiceFight.style.animation = "lose-fight-animation 3s";
            break;
        case "lose":
            opponentChoiceFight.style.animation = "opponent-win-fight-animation 2s";
            userChoiceFight.style.animation = "lose-fight-animation 3s";
            break;
        case "draw":
            break;
        default:
            console.error("ANIMATION NOT POSSIBLE");
    }
}

// Function to reset the game
const resetGame = () => {
    fightCurrentResult = "";
    opponentRandomChoice = 0;
    userChoice = 0;
    fightResultInfo.innerHTML = "";
    userChoiceFight.innerHTML = '<i class="fas fa-hand-rock"></i>';
    opponentChoiceFight.innerHTML = '<i class="fas fa-hand-rock"></i>';
    userChoiceFight.style.animation = "";
    opponentChoiceFight.style.animation = "";
}


choiceElement.forEach(function(choice) {
    choice.addEventListener('click', () => {
        console.log(choice.getAttribute("value"));
        userChoice = parseInt(choice.getAttribute("value"));
        fightContainer.style.display = "block";
        setTimeout(function() { userChoiceChange(userChoice); opponentRandomChoice = opponentChoiceGenerator(); opponentChoiceChange(opponentRandomChoice); fightResult(userChoice, opponentRandomChoice); console.log(fightCurrentResult); scoreManage(fightCurrentResult); gameResultAnimation(fightCurrentResult) }, 2000);
        setTimeout(function() {fightContainer.style.display = "none"; resetGame(); }, 5000);
    })
})
console.log(opponentChoiceGenerator());