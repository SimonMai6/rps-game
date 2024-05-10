function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return [`It's a draw. You both picked ${playerSelection}!`, -1];
    }
    else if((playerSelection === "Scissor" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissor")){
        return [`You Lose! ${computerSelection} beats ${playerSelection}!`, 0];
    }
    else{
        return [`You Win! ${playerSelection} beats ${computerSelection}!`, 1];
    }
}


function getComputerChoice(){
    const computerChoice = ["Rock", "Paper", "Scissor"];
    const ranNum = Math.floor(Math.random()*3);
    return computerChoice[ranNum];
}


const buttons = document.querySelectorAll("button");
const para = document.createElement("p");
const div = document.querySelector("#result");
const resultPara = document.createElement("p");


let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        para.textContent = "";
        resultPara.textContent = "";

        const computerSelection = getComputerChoice();
        const playerSelection = button.textContent;
        para.textContent += `Player chose ${playerSelection} and Computer chose ${computerSelection}. `;
        para.textContent += playRound(playerSelection, computerSelection)[0];
        
        div.appendChild(para);
        if(playRound(playerSelection, computerSelection)[1] === 1){
            playerScore += 1;
        }
        else if(playRound(playerSelection, computerSelection)[1] === 0){
            computerScore += 1;
        }
        if(computerScore === 5){
            resultPara.textContent = `Player ${playerScore} vs Computer ${computerScore}. Computer wins!`;
        }
        else if(playerScore === 5){
            resultPara.textContent = `Player ${playerScore} vs Computer ${computerScore}. You win!`;
        }
        else{
            resultPara.textContent = `Player ${playerScore} vs Computer ${computerScore}.`;
        }

        div.appendChild(resultPara);

    });
});



