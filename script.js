let wins = 0;
// let losses = 0;
// let draws = 0;

document.getElementById("wins").innerText = `${wins}`;

function WinLogic(player, computer) {

  // if (player === computer) {
  //   draws += 1;
  //   document.getElementById("result").innerText = "draw"
  //   document.getElementById("draws").innerText = "Draws: " + draws;

  // }
  if ((player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")) {
    wins += 1;
    // document.getElementById("result").innerText = "win"
    document.getElementById("wins").innerText = `${wins}`;

  }
  // else {
  //   losses += 1;
  //   document.getElementById("result").innerText = "loose"
  //   document.getElementById("losses").innerText = "Losses: " + losses;

  // }


}




function Computer(...args) {
  const values = args;
  const random = Math.floor(Math.random() * values.length);
  return values[random];
}


function ComputerTurn(player) {

  const computer = Computer("rock", "paper", "scissors");

  const compTurn = document.getElementsByClassName(computer);

  const playerTurn = document.getElementById(player)

  // console.log(compTurn[0])

  if (compTurn.length > 0) {

    const computerDisplay = document.getElementById('computer_display');
    // Clear previous content if needed
    computerDisplay.innerHTML = '';

    // Append the element to the computer_display element
    computerDisplay.appendChild(compTurn[0].cloneNode(true));


  }



  WinLogic(player, computer);


}
