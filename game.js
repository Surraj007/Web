let userScore =0;
let comScore =0;

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");
const msg= document.querySelector("#msg");
const choices= document.querySelectorAll(".choice");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
//print game is draw
const drawGame =() =>{
    console.log("Game is draw.");
    msg.innerText="Game is draw.Play again!";
    msg.style.backgroundColor="#373A40";
}

const showWinner=(userWin) =>{
    if(userWin){
        console.log("You Win!");
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }else{
        comScore++;
        compScorePara.innerText= comScore;
        console.log("You Lose!");
        msg.innerText="You Lose!";
        msg.style.backgroundColor="Red";
    }
}


//Generate user choice
const playGame = (userChoice) => {
    console.log("User Choice=", userChoice);

    //Now generate computer choice
    const compChoice= getCompChoice();
    console.log("Computer Choice=", compChoice);

//draw game
if(userChoice === compChoice){
drawGame();
}else{
    let userWin = true;
    if (userChoice==="rock"){
        //scissors, paper
        userWin=compChoice === "paper" ? false: true;
    }else if(userChoice === "paper"){
        //rock, scissors
        userWin = compChoice === "scissors" ? false: true;
    }else {
//rock, paper
userWin= compChoice === "rock"? false: true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
