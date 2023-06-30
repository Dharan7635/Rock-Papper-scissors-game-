
let result = document.getElementById('result');
let scorediv = document.getElementById("player-score");
let handsdiv = document.getElementById("hands");
let finalscore = {'playerscore':0,'computerscore':0};
function getComputerChoice() {
  let properties = ['Rock','Paper','Scissors'];
  let randomNumber = Math.floor(Math.random()*3);
  return properties[randomNumber]
}

function getResult(playerChoice, computerChoice) {
    let score;
    if(playerChoice==computerChoice){
          score=0;
    }
    else if(playerChoice=='Rock'&&computerChoice=='Scissors'){
        score = 1;
    }
    else if(playerChoice=='Papper'&&computerChoice=='Scissors'){
           score = 1;
    }
    else if (playerChoice=='Papper'&&computerChoice=='Rock'){
        score =1;
    }
    else{
        score = -1;
    }

  return score    
}


function showResult(score, playerChoice, computerChoice) {
  if(score == 0){
          result.innerText = "TIE"
  }
  else if(score == 1){
    result.innerText ="YOU WIN!"
  }
  else{
    result.innerText = "YOU LOSE!"
  }
  scorediv.innerText = `Your Score: ${finalscore['playerscore']} && Computer Score: ${finalscore['computerscore']}`;
  handsdiv.innerText = `PLAYER CHOICE : ${playerChoice} vs COMPUTER CHOICE : ${computerChoice}`;
}


function onClickRPS(playerChoice) {
   let computerChoice = getComputerChoice();
   const score = getResult(playerChoice,computerChoice);
   finalscore['playerscore'] += score;
   finalscore['computerscore'] += -(score);
   console.log(finalscore);
   showResult(score,playerChoice,computerChoice);
}


function playGame() {
  let rpsButtons = document.querySelectorAll('.rpsButton');
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);
  rpsButtons.forEach(button =>button.onclick =()=>onClickRPS(button.value)); 
  let end = document.getElementById('endGameButton');
  end.onclick = () => endGame(finalscore);
}

function endGame(finalscore) {
  finalscore['playerscore'] = 0
  finalscore['computerscore'] = 0
  result.innerText = '';
  handsdiv.innerText = '';
  scorediv.innerText = '';
}

playGame()