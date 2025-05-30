
let computerMove='';
let result=''
let user=''
function computerMovefun(usermove){
    user=usermove
    const randomMove=(Math.random().toFixed(2))
    if(randomMove>0 && randomMove<=0.33){
        computerMove='Rock'
}
else if(randomMove>0.33 && randomMove<=0.66){
    computerMove='Paper'
}
else if(randomMove>0.66 && randomMove<=1){
    computerMove='Scissors'
}

result=computerMove
imgchange()
return result
}

function imgchange(winnername) {
  document.querySelector('.computer').innerHTML = `
    <div class="move-box">
      <p>COMPUTER MOVE</p>
      <img src="images/${result}.png" alt="Computer Move">
    </div>`;

  document.querySelector('.you').innerHTML = `
    <div class="move-box">
      <p>YOUR MOVE</p>
      <img src="images/${user}.png" alt="Your Move">
    </div>`;

  document.querySelector('.winner').innerHTML = `<h2>${winnername}</h2>`;
}



