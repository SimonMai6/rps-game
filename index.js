function capitalize(string){

    if(typeof string === "string"){
        let lower = string.substring(1).toLowerCase();
        let upper = string.charAt(0).toUpperCase();
        return upper + lower;
    }
    else{
        console.log("not a string.");
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a draw. You both picked " + playerSelection;
    }
    else if((playerSelection === "Scissor" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissor")){
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else{
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}


function getComputerChoice(){
    const computerChoice = ["Rock", "Paper", "Scissor"];
    const ranNum = Math.floor(Math.random()*3);
    return computerChoice[ranNum];
}

const playerSelection = capitalize(prompt("Choose from Rock, Paper, or, Scissor."));
const computerSelection = getComputerChoice();
console.log(playerSelection + " " + computerSelection)

console.log(playRound(playerSelection, computerSelection));

