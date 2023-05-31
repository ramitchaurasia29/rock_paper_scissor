let userScore = 0;
let computerScore = 0;
const userScore_span =document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s']
    const randomNumber = (Math.floor(Math.random() *3));
    return choices[randomNumber];
}

function convertTowards(letter){
    if(letter === "r") return "rock";
    if(letter === "p") return "paper";
    return "Scissors";
    
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // result_p.innerHTML = user + "beats" + computer +".you win";
    result_p.innerHTML = `${convertTowards(user)}   beats   ${convertTowards(computer)}  You win! `;
}
function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // result_p.innerHTML = user + "beats" + computer +".you win";
    result_p.innerHTML = `${convertTowards(user)}   loses to   ${convertTowards(computer)}  You loose! `;
    
}
function draw(user,computer){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // result_p.innerHTML = user + "beats" + computer +".you win";
    result_p.innerHTML = `${convertTowards(user)}   beats   ${convertTowards(computer)}  Its a draw! `;
}

function game(userChoice){
    const computerChoice =getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;

    }
}



rock_div.addEventListener('click',function(){
    game("r");
})
paper_div.addEventListener('click',function(){
    game("p");
})
scissor_div.addEventListener('click',function(){
    game("s");
})