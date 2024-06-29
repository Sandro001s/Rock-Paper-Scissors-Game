let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let pcRock = document.getElementById("computer-rock");
let pcPaper = document.getElementById("computer-paper");
let pcScissors = document.getElementById("computer-scissors");
let result = document.querySelector("h2");

let playAgain = document.getElementById("playagain");

let computerMove = pickComputerMove();

function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = "";

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = "rock";
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = "paper";
    }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = "scissors";
    }
    return computerMove
}

rock.addEventListener("click", () => {
    paper.classList.add("displaynone");
    scissors.classList.add("displaynone");

    if(computerMove === "rock"){
        pcPaper.classList.add("displaynone");
        pcScissors.classList.add("displaynone");

        result.textContent = "Tie!";

    }else if(computerMove === "paper"){
        pcRock.classList.add("displaynone");
        pcScissors.classList.add("displaynone");

        result.textContent = "You Lose!"

    }else if(computerMove === "scissors"){
        pcRock.classList.add("displaynone");
        pcPaper.classList.add("displaynone");

        result.textContent = "You Win!";
    }
})

paper.addEventListener("click", () => {
    rock.classList.add("displaynone");
    scissors.classList.add("displaynone");

    if(computerMove === "rock"){
        pcPaper.classList.add("displaynone");
        pcScissors.classList.add("displaynone");

        result.textContent = "You Win!";

    }else if(computerMove === "paper"){
        pcRock.classList.add("displaynone");
        pcScissors.classList.add("displaynone");

        result.textContent = "Tie!"

    }else if(computerMove === "scissors"){
        pcRock.classList.add("displaynone");
        pcPaper.classList.add("displaynone");

        result.textContent = "You Lose!";
    }
})

scissors.addEventListener("click", () => {
    paper.classList.add("displaynone");
    rock.classList.add("displaynone");

    if(computerMove === "rock"){
        pcPaper.classList.add("displaynone");
        pcScissors.classList.add("displaynone");

        result.textContent = "You Lose!";

    }else if(computerMove === "paper"){
        pcRock.classList.add("displaynone");
        pcScissors.classList.add("displaynone");

        result.textContent = "You Win!"

    }else if(computerMove === "scissors"){
        pcRock.classList.add("displaynone");
        pcPaper.classList.add("displaynone");

        result.textContent = "Tie!";
    }
})

playAgain.addEventListener("click", () => {
    location.reload();
})