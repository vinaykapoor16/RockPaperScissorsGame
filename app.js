let userScore = 0;
let compScore =0;
const choices = document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const option = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return option[ranIdx];
};

const drawGame=()=>{
    console.log("Draw game");
    msg.innerText = "game draw";

};

const showWinner= (userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText = "you win";
    }
    else{
        console.log("you loss");
        msg.innerText = "you loos";

    }
};

const playGame = (userChoice) =>{
    console.log("The user Choice is" ,userChoice);
const compChoice = genCompChoice();
console.log("The Comp Choice is ",compChoice);
//draw
if(userChoice === compChoice ){
    drawGame();
}else{//user win or comp win
    let userWin = true;
    if(userChoice === "rock"){
        userWin=compChoice==="scissors"? true: false;
    }
    else if(userChoice=== "paper"){
        userWin= compChoice==="rock"?true:false;
    }
    else{
        userWin= compChoice==="paper"?true:false;
    }
}

};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
});
});
