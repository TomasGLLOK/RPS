console.log("Hello World")

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    let choice = Math.round(Math.random() * 2);
    return myArray[choice];
}