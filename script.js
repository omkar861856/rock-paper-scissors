const props = ["rock", "paper", "scissors"];

const wins = document.getElementById('wins');
wins.innerText = window.localStorage.getItem('wins')



function ComputerTurn(player) {


    // Randomise computer turn
  const computer = Math.floor(Math.random() * props.length);
  const computerTurn = props[computer];

  // get the result 

  const result = ResultLogic(player, computerTurn);

  // set wins to local storage
  wins.innerText = window.localStorage.getItem('wins')

  
  // player button
  const playerButton = document.getElementById(player).cloneNode(true)
  playerButton.classList.remove(player)
  playerButton.classList.add('player')
  playerButton.setAttribute('disabled', true);


//   result and reset button
  const resetButton = document.createElement('button')
  resetButton.textContent = 'Restart'
  resetButton.addEventListener('click', () => {
    window.location.reload();
  })
  const declarationDiv = document.createElement('div');
  declarationDiv.textContent = `${result.result}`;
  declarationDiv.appendChild(resetButton)
  declarationDiv.id = 'declaration'


//   computor button
  let computerButton = document.getElementById(computerTurn).cloneNode(true)
  computerButton.classList.remove(computerTurn)
  computerButton.classList.add('computer')
  computerButton.setAttribute('disabled', true);

// clear the play area and display result
  const area = document.getElementById('area');
  area.id = 'result'
  area.innerHTML = ""
  area.appendChild(playerButton)
  area.appendChild(declarationDiv)
  area.appendChild(computerButton)
}

// result logic
function ResultLogic(player, computer) {

    let wins= parseInt(window.localStorage.getItem('wins'));
    let draws=parseInt(window.localStorage.getItem('draws'));
    let losses= parseInt(window.localStorage.getItem('losses'));

    console.log(wins, draws, losses)

    if (player === computer) {
      draws += 1;    
      window.localStorage.setItem('draws', draws)
      return {draws, result: "It's a draw"}
  
    }
    if ((player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")) {

      wins += 1;
      window.localStorage.setItem('wins', wins)

      return {wins, result: "You win"};
  
    }
    else {
      losses += 1;
      window.localStorage.setItem('losses', losses)

      return {losses, result: "You loose"};
      
  
    }
  
  
  }

  // to reset localstore
  function setLocalStorage(){
    window.localStorage.setItem('wins', 0)
    window.localStorage.setItem('draws', 0)
    window.localStorage.setItem('losses', 0)
    wins.innerText = window.localStorage.getItem('wins')

  }

