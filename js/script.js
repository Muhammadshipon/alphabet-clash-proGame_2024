// capture keyboard key press 
function handleKeyboardKeyUpEvent(event){
  const playerPress = event.key ;
  if(playerPress === "Escape"){
    gameOver();
  }
 const  currentAlphabet = document.getElementById('current-alphabet');
 const expectedAlphabet = currentAlphabet.innerText.toLowerCase() ;
  if(playerPress === expectedAlphabet){
  const currentScore = getTextElementValueById('current-score');
  const updatedScore = currentScore + 1;
  setElementValueById('current-score',updatedScore);

    removeBgColorById(expectedAlphabet);
    return continueGame();
  }
else{
  const currentLife = getTextElementValueById('current-life');
  const updatedLife = currentLife - 1;
  setElementValueById('current-life',updatedLife);
  if(updatedLife === 0){
    gameOver();
  }
}
}

 document.addEventListener('keyup',handleKeyboardKeyUpEvent)


function continueGame(){
  const alphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById('current-alphabet')
  currentAlphabet.innerText = alphabet;
  setBgColorById(alphabet.toLowerCase());
}



