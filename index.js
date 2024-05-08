function capitalize(string){

    let lower = string.substring(1).toLowerCase();
    let upper = string.charAt(0).toUpperCase();
    return upper + lower;
 

}

function playRound(playerSelection, computerSelection){
    if(!(typeof playerSelection === "string")){
        console.log("Not a string.");
    }
    else if(playerSelection === computerSelection){
        return `It's a draw. You both picked ${playerSelection}!`;
    }
    else if((playerSelection === "Scissor" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissor")){
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
    else{
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }
}


function getComputerChoice(){
    const computerChoice = ["Rock", "Paper", "Scissor"];
    const ranNum = Math.floor(Math.random()*3);
    return computerChoice[ranNum];
}


const buttons = document.querySelectorAll("button");
const div = 
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        const computerSelection = getComputerChoice();
        const playerSelection = capitalize(button.id);
        console.log(`Player chose ${playerSelection} vs Computer chose ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    });
});



