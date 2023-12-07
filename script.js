console.log("Hello World")

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    let choice = Math.round(Math.random() * 2);
    return myArray[choice];
}

function playRound(pChoice, cChoice) {
    if (pChoice == cChoice) {
        console.log("Is a tie!");
        console.log("You choose ${pChoice} PC choose ${cChoice}");
    }
    else if (pChoice=="Rock" && cChoice=="Paper") {
        console.log("You loose!");
        console.log("You choose ${pChoice} PC choose ${cChoice}");
    }
   else if (pChoice=="Rock" && cChoice=="Scissors") {
        console.log("You win!");
        console.log("You choose ${pChoice} PC choose ${cChoice}");
    }
    else if (pChoice=="Paper" && cChoice=="Scissors") {
        console.log("You loose!");
        console.log("You choose ${pChoice} PC choose ${cChoice}");
    }
   else if (pChoice=="Paper" && cChoice=="Rock") {
        console.log("You win!");
        console.log("You choose ${pChoice} PC choose ${cChoice}");
    }
    else if (pChoice=="Scissors" && cChoice=="Rock") {
        console.log("You loose!");
        console.log("You choose ${pChoice} PC choose ${cChoice}");
    }
   else if (pChoice=="Scissors" && cChoice=="Paper") {
        console.log("You win!");
        console.log("You choose ${pChoice} PC choose ${cChoice}");
    }

let pChoice = "Rock";
let cChoice = getComputerChoice();

console.log(playRound(pChoice, cChoice));
}