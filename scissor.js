let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelectorAll("#msg");
const userScorePara = document.querySelectorAll("#user-score");
const computerScorePara = document.querySelectorAll("#computer-score")
const genComputerChoice = () =>{

    const options = ["stone","paper", "scissors"];
     const randId = Math.floor(Math.random()*3);
     return options [randId];
    // rock,paper,scissor
};
const drawGame = () =>{
    console.log("game was draw");
    
    msg.style.backgroundColor = "#081b31";
    
}
const showWinner = (userWin, userChoice , computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
       
        msg.innerText = "you win"
        msg.style.backgroundColor = "green";
        
    }else{
        computerScore++;
        computerScorePara.innerText =computerScore;
        
        msg.innerText = "you lose"; 
        msg.style.backgroundColor = "red";

    }
    
}



const playGame = ( userChoice) =>{
    console.log("userChoice = ",userChoice);
    // generate computer choice 
    const computerChoice = genComputerChoice();
    console.log("computerChoice= ",computerChoice);

    if(userChoice === computerChoice){
        // draw choice 
        drawGame();
    }else{
        let userWin = true;
        
        if(userChoice =="rock"){
            userWin = computerChoice==="paper"?false:true;


        }else if( userChoice ==="paper"){
            computerChoice ==="scissor"? false:true;
        }else{
            computerChoice=="rock"?false:true;
        }
        showWinner(userWin , userChoice, computerChoice);

        
    }

    

}





choices.forEach((choice) =>{
    
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
  
        playGame(userChoice);

    })
})







    

    
    


