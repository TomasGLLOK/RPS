console.log("Hello World")

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 2) + 1;
    return myArray[choice];
}