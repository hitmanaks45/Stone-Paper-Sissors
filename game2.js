let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScorepara=document.querySelector("#User-score");
const computerScorepara=document.querySelector("#Computer-score");

choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const userchoice=choice.getAttribute("id");
        // console.log("choice is clicked", userchoice);
        playGame(userchoice);
    });
});

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScorepara.textContent = userScore;
    computerScorepara.textContent = computerScore;
    msg.innerHTML = "Game has been reset. Start playing!";
    msg.style.backgroundColor = "rgb(10, 10, 11)"; // Reset to default or initial color
};

const drawgame=() => {
    msg.innerHTML="It's a draw!  PLAY AGAIN!";
    msg.style.backgroundColor="rgb(78, 78, 150)"
    console.log("It's a draw! PLAY AGAIN!");
}
const showWinner=(userWin,computerChoice,userchoice) => {
    if(userWin){
        userScore++;
        userScorepara.textContent=userScore;
        msg.innerHTML=`Congratulations, Your ${userchoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green"
        console.log("YOU WIN!");
    }
    else{
        computerScore++;
        computerScorepara.textContent=computerScore;
        msg.innerHTML=`You have lost! Your ${userchoice} loses to ${computerChoice} `;
        msg.style.backgroundColor="red";
        console.log("YOU LOSE!");
    }
};
const playGame=(userchoice) => {
    console.log("user have chossed", userchoice);
    // generate computer choice;
    const computerChoice=generatecomputerChoice();
    console.log("computer has chosen", computerChoice);

    if(userchoice===computerChoice){
            drawgame()
        }
        else{
            let userWin = true;
            if (userchoice === "rock") {
              //scissors, paper
              userWin = computerChoice === "paper" ? false : true;
            } else if (userchoice === "paper") {
              //rock, scissors
              userWin = computerChoice === "scissors" ? false : true;
            } else {
              //rock, paper
              userWin = computerChoice === "rock" ? false : true;
            }
            showWinner(userWin,computerChoice,userchoice );
          }
        
};

const generatecomputerChoice= () => {
        const options=["rock", "paper", "scissors"];
        return options[Math.floor(Math.random()*options.length)];
}

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', resetGame);